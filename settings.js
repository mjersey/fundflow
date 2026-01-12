/**
 * SETTINGS MODULE
 * Handles the injection of the Settings Modal and its associated logic.
 * Shared between Accounts and Savings pages.
 */

const SETTINGS_MODAL_HTML = `
<div id="settings-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 hidden">
    <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 w-full max-w-sm rounded-2xl p-4 shadow-2xl animate-fade-in flex flex-col h-auto max-h-[85vh]">
        <div class="flex justify-between items-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            <div class="flex items-center gap-2">
                <div class="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg"><i data-lucide="settings" class="w-3.5 h-3.5 text-gray-500 dark:text-white"></i></div>
                <h3 class="font-bold text-sm text-gray-900 dark:text-white">App Settings</h3>
            </div>
            <button onclick="toggleSettings(false)" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>
        
        <div class="overflow-y-auto pr-1 space-y-3">
            
            <!-- Financial Report Section -->
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-3 rounded-xl border border-cyan-100 dark:border-cyan-900/30">
                <h4 class="text-[9px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Statement
                </h4>
                
                <div class="grid grid-cols-1 gap-2 mb-2">
                    <div>
                        <select id="report-type-selector" onchange="toggleReportInputs()" class="custom-select w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none cursor-pointer">
                            <option value="standard">Standard (Week/Month/All)</option>
                            <option value="specific-month">Specific Month</option>
                            <option value="custom">Custom Range</option>
                        </select>
                    </div>

                    <!-- Standard Inputs -->
                    <div id="report-input-standard">
                        <select id="report-range" class="custom-select w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                            <option value="week">Current Week</option>
                            <option value="month">Current Month</option>
                            <option value="all">All Time History</option>
                        </select>
                    </div>

                    <!-- Specific Month Input -->
                    <div id="report-input-month" class="hidden">
                        <input type="month" id="report-month-val" class="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                    </div>

                    <!-- Custom Range Inputs -->
                    <div id="report-input-custom" class="hidden grid grid-cols-2 gap-2">
                        <input type="date" id="report-start" class="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                        <input type="date" id="report-end" class="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                    </div>
                </div>

                <button onclick="generateReport()" class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg text-[10px] flex items-center justify-center gap-2 shadow-sm transition-all">
                    <i data-lucide="printer" class="w-3 h-3"></i> Generate Report
                </button>
            </div>

            <!-- General Preferences -->
            <div>
                <h4 class="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Preferences</h4>
                <div class="grid grid-cols-2 gap-2">
                    <div class="col-span-2">
                        <label class="block text-[9px] font-medium text-gray-600 dark:text-gray-300 mb-1">Dashboard View</label>
                        <select id="setting-dashboard-view" class="custom-select w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white focus:border-cyan-500 outline-none transition-colors">
                            <option value="weekly">This Week</option>
                            <option value="monthly">This Month</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-[9px] font-medium text-gray-600 dark:text-gray-300 mb-1">Income</label>
                        <div class="relative">
                            <span class="absolute left-2.5 top-2 text-gray-400 text-[10px]">₱</span>
                            <input type="number" id="setting-amount" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-6 pr-2 text-[10px] dark:text-white focus:border-cyan-500 outline-none transition-colors">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[9px] font-medium text-gray-600 dark:text-gray-300 mb-1">Freq.</label>
                        <select id="setting-frequency" onchange="updateSettingsUI()" class="custom-select w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white focus:border-cyan-500 outline-none transition-colors">
                            <option value="weekly">Weekly</option>
                            <option value="semi-monthly">Semi-Monthly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>

                <div id="setting-weekly-container" class="mt-2">
                    <label class="block text-[9px] font-medium text-gray-600 dark:text-gray-300 mb-1">Day of Week</label>
                    <select id="setting-day" class="custom-select w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                        <option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option><option value="0">Sunday</option>
                    </select>
                </div>
                <div id="setting-monthly-container" class="hidden mt-2">
                    <label class="block text-[9px] font-medium text-gray-600 dark:text-gray-300 mb-1">Day of Month</label>
                    <input type="number" id="setting-date" min="1" max="31" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-[10px] dark:text-white outline-none">
                </div>
            </div>

            <!-- Data Management -->
            <div class="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <h4 class="text-[9px] font-bold text-red-500 uppercase tracking-wider mb-1">Danger Zone</h4>
                
                <button onclick="window.showConfirmModal('Reset Data', 'Are you sure you want to delete ALL transactions and goals? This cannot be undone.', confirmResetData)" class="w-full bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 font-bold py-2 rounded-lg border border-red-100 dark:border-red-900/30 transition-colors text-[10px] flex items-center justify-center gap-1.5 group">
                    <i data-lucide="trash-2" class="w-3 h-3 group-hover:scale-110 transition-transform"></i> Reset All Data
                </button>

                <button onclick="handleDeleteAccount()" class="w-full bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 dark:text-red-500 font-bold py-2 rounded-lg border border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-colors text-[10px] flex items-center justify-center gap-1.5">
                    <i data-lucide="user-x" class="w-3 h-3"></i> Delete Account
                </button>
            </div>
        </div>

        <div class="pt-3 mt-2 border-t border-gray-200 dark:border-gray-700">
            <button onclick="saveSettings()" class="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold py-2.5 rounded-xl transition-all shadow-md text-[10px]">Save Changes</button>
        </div>
    </div>
</div>
`;

// Initialize Settings on Load
document.addEventListener('DOMContentLoaded', () => {
    // Inject HTML
    if (!document.getElementById('settings-modal')) {
        document.body.insertAdjacentHTML('beforeend', SETTINGS_MODAL_HTML);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});

// --- EXPOSED FUNCTIONS ---

window.toggleSettings = function(show) {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;
    
    if (show) {
        // Load current state into inputs
        document.getElementById('setting-amount').value = window.state.income || '';
        document.getElementById('setting-frequency').value = window.state.incomeFrequency || 'monthly';
        document.getElementById('setting-day').value = window.state.incomeDay || 1;
        document.getElementById('setting-date').value = window.state.incomeDate || 1;
        document.getElementById('setting-dashboard-view').value = window.state.dashboardView || 'weekly';
        
        window.updateSettingsUI();
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
};

window.updateSettingsUI = function() {
    const freq = document.getElementById('setting-frequency').value;
    const weeklyContainer = document.getElementById('setting-weekly-container');
    const monthlyContainer = document.getElementById('setting-monthly-container');

    if (freq === 'weekly') {
        weeklyContainer.classList.remove('hidden');
        monthlyContainer.classList.add('hidden');
    } else {
        weeklyContainer.classList.add('hidden');
        monthlyContainer.classList.remove('hidden');
    }
};

window.saveSettings = function() {
    window.state.income = Number(document.getElementById('setting-amount').value);
    window.state.incomeFrequency = document.getElementById('setting-frequency').value;
    window.state.incomeDay = Number(document.getElementById('setting-day').value);
    window.state.incomeDate = Number(document.getElementById('setting-date').value);
    window.state.dashboardView = document.getElementById('setting-dashboard-view').value;
    
    // Also update budget page input if it exists currently
    const incomeInput = document.getElementById('income-input');
    if(incomeInput) incomeInput.value = window.state.income;

    window.saveData();
    window.toggleSettings(false);
    
    if (window.renderApp) window.renderApp();
    if (window.updateTotals) window.updateTotals();
    
    if(window.showCustomAlert) window.showCustomAlert("Settings Saved", "Preferences updated successfully.");
};

window.toggleReportInputs = function() {
    const type = document.getElementById('report-type-selector').value;
    document.getElementById('report-input-standard').classList.add('hidden');
    document.getElementById('report-input-month').classList.add('hidden');
    document.getElementById('report-input-custom').classList.add('hidden');

    if (type === 'standard') document.getElementById('report-input-standard').classList.remove('hidden');
    else if (type === 'specific-month') document.getElementById('report-input-month').classList.remove('hidden');
    else if (type === 'custom') document.getElementById('report-input-custom').classList.remove('hidden');
};

// Fallback generateReport if not defined in script.js
if (!window.generateReport) {
    window.generateReport = function() {
        if(window.showCustomAlert) window.showCustomAlert("Info", "Report generation feature coming soon!");
        else alert("Report generation coming soon!");
    };
}

window.confirmResetData = function() {
    window.state.expenses = [];
    window.state.savings = [];
    window.state.allocations = [];
    window.state.transfers = [];
    // Reset account balances to 0, or keep them? Usually reset implies fresh start.
    // Let's reset balances but keep accounts.
    window.state.accounts.forEach(a => {
        a.balance = 0;
        if(a.creditLimit) a.balance = 0; // Debt reset
    });
    
    window.saveData();
    window.location.reload();
};