/* --- DATA & STATE --- */
const APP_KEY = 'moneyFlowStateV3';

const PROVIDERS = [
    // Cash & Banks
    { id: 'cash', name: 'Cash', type: 'bank', color: 'bg-green-600 dark:bg-green-700', icon: 'banknote', label: 'Cash', interest: '0%', interestFreq: '' },
    { id: 'maribank', name: 'MariBank', type: 'bank', color: 'bg-orange-500 dark:bg-orange-600', icon: 'landmark', label: 'MB', interest: '3.5% p.a.', interestFreq: 'Daily' },
    { id: 'seabk', name: 'SeaBank', type: 'bank', color: 'bg-orange-400 dark:bg-orange-500', icon: 'waves', label: 'SB', interest: '4.5% p.a.', interestFreq: 'Daily' },
    { id: 'gcash', name: 'GCash', type: 'bank', color: 'bg-blue-500 dark:bg-blue-600', icon: 'smartphone', label: 'GC', interest: '2.6% p.a.', interestFreq: 'Daily' },
    { id: 'maya', name: 'Maya', type: 'bank', color: 'bg-green-500 dark:bg-green-600', icon: 'scan-line', label: 'MY', interest: '3.5%-14% p.a.', interestFreq: 'Daily' },
    { id: 'gotyme', name: 'GoTyme', type: 'bank', color: 'bg-purple-500 dark:bg-purple-600', icon: 'credit-card', label: 'GO', interest: '4.0% p.a.', interestFreq: 'Monthly' },
    { id: 'cimb', name: 'CIMB', type: 'bank', color: 'bg-red-500 dark:bg-red-600', icon: 'landmark', label: 'CIMB', interest: '2.5%-15% p.a.', interestFreq: 'Monthly' },
    { id: 'bpi', name: 'BPI', type: 'bank', color: 'bg-red-600 dark:bg-red-700', icon: 'landmark', label: 'BPI', interest: '0.0625%', interestFreq: 'Quarterly' },
    { id: 'bdo', name: 'BDO', type: 'bank', color: 'bg-blue-700 dark:bg-blue-800', icon: 'briefcase', label: 'BDO', interest: '0.0625%', interestFreq: 'Quarterly' },
    { id: 'ub', name: 'UnionBank', type: 'bank', color: 'bg-orange-500 dark:bg-orange-600', icon: 'building', label: 'UB', interest: '0.10%', interestFreq: 'Quarterly' },
    { id: 'security', name: 'Security Bank', type: 'bank', color: 'bg-blue-600 dark:bg-blue-700', icon: 'shield-check', label: 'SB', interest: '0.0625%', interestFreq: 'Quarterly' },
    { id: 'metro', name: 'Metrobank', type: 'bank', color: 'bg-blue-800 dark:bg-blue-900', icon: 'building-2', label: 'MB', interest: '0.0625%', interestFreq: 'Quarterly' },
    { id: 'landbank', name: 'Landbank', type: 'bank', color: 'bg-green-600 dark:bg-green-700', icon: 'sprout', label: 'LB', interest: '0.0625%', interestFreq: 'Quarterly' },
    
    // Credit / PayLater
    { id: 'spaylater', name: 'SPayLater', type: 'credit', color: 'bg-orange-600 dark:bg-orange-700', icon: 'shopping-bag', label: 'SP' },
    { id: 'lazpaylater', name: 'LazPayLater', type: 'credit', color: 'bg-blue-400 dark:bg-blue-500', icon: 'wallet', label: 'Laz' },
    { id: 'tiktok', name: 'TiktokPayLater', type: 'credit', color: 'bg-black dark:bg-gray-800', icon: 'music-2', label: 'TK' },
    { id: 'mayacredit', name: 'Maya Credit', type: 'credit', color: 'bg-green-600 dark:bg-green-700', icon: 'credit-card', label: 'MC' },
    { id: 'gcredit', name: 'GCredit', type: 'credit', color: 'bg-blue-500 dark:bg-blue-600', icon: 'credit-card', label: 'GC' },
    { id: 'gloan', name: 'GLoan', type: 'credit', color: 'bg-blue-700 dark:bg-blue-800', icon: 'banknote', label: 'GL' },
    { id: 'cc', name: 'Credit Card', type: 'credit', color: 'bg-slate-700 dark:bg-slate-800', icon: 'credit-card', label: 'CC' },

    // Icons
    { id: 'food', name: 'Food', type: 'generic', color: 'bg-yellow-500 dark:bg-yellow-600', icon: 'utensils', label: '' },
    { id: 'transpo', name: 'Transpo', type: 'generic', color: 'bg-gray-500 dark:bg-gray-600', icon: 'bus', label: '' },
    { id: 'home', name: 'Housing', type: 'generic', color: 'bg-teal-500 dark:bg-teal-600', icon: 'home', label: '' },
    { id: 'bills', name: 'Bills', type: 'generic', color: 'bg-red-400 dark:bg-red-500', icon: 'zap', label: '' },
    { id: 'shop', name: 'Shopping', type: 'generic', color: 'bg-pink-500 dark:bg-pink-600', icon: 'shopping-bag', label: '' },
    { id: 'save', name: 'Savings', type: 'generic', color: 'bg-cyan-500 dark:bg-cyan-600', icon: 'piggy-bank', label: '' },
    { id: 'educ', name: 'Education', type: 'generic', color: 'bg-blue-300 dark:bg-blue-400', icon: 'graduation-cap', label: '' },
    { id: 'health', name: 'Health', type: 'generic', color: 'bg-red-300 dark:bg-red-400', icon: 'heart-pulse', label: '' },
    { id: 'travel', name: 'Travel', type: 'generic', color: 'bg-sky-400 dark:bg-sky-500', icon: 'plane', label: '' },
    { id: 'gadget', name: 'Gadgets', type: 'generic', color: 'bg-zinc-500 dark:bg-zinc-600', icon: 'laptop', label: '' },
    { id: 'subscription', name: 'Subscription', type: 'generic', color: 'bg-indigo-500 dark:bg-indigo-600', icon: 'calendar-check', label: '' },
];

const DEFAULT_CATEGORIES = {
    bills: { label: 'Bills', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-500/10' },
    allowance: { label: 'Allowance', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-500/10' },
    savings: { label: 'Savings', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-500/10' },
    emergency: { label: 'Emergency', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-500/10' },
    leisure: { label: 'Leisure', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-500/10' },
    transfer: { label: 'Transfer', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-500/10' },
    food: { label: 'Food', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-500/10' },
    transpo: { label: 'Transport', color: 'text-gray-600 dark:text-gray-400', bg: 'bg-gray-100 dark:bg-gray-500/10' },
};

let state = {
    income: 0,
    recurring: { enabled: true, amount: 0, frequency: 'weekly', day: 1, date: 1 },
    settings: { dashboardView: 'weekly' }, 
    categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
    allocations: [],
    savings: [],
    savingsHistory: [],
    accounts: [],
    expenses: [],
    transfers: [],
    pendingNotificationAmount: 0,
    lastInterestDate: null 
};

// --- GLOBAL EXPORTS ---
window.toggleTheme = toggleTheme;
window.saveSettings = saveSettings;
window.toggleSettings = toggleSettings;
window.initTheme = initTheme;
window.loadState = loadState;
window.saveData = saveData;
window.renderAccountsSidebar = renderAccountsSidebar;
window.showCustomAlert = showCustomAlert; 
window.showConfirmModal = showConfirmModal;

/* --- CUSTOM MODAL ALERT SYSTEM (REDESIGNED) --- */
function showCustomAlert(title, message) {
    let modal = document.getElementById('global-alert-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'global-alert-modal';
    modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-fade-in';
    
    // Modern Alert Design
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 w-full max-w-sm rounded-3xl p-6 shadow-2xl transform scale-100 transition-all flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 text-white">
                <i data-lucide="info" class="w-8 h-8"></i>
            </div>
            <h3 id="global-alert-title" class="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">${title}</h3>
            <p id="global-alert-message" class="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">${message}</p>
            <button onclick="document.getElementById('global-alert-modal').remove()" class="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                Okay, Got it
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Initialize icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showConfirmModal(title, message, onConfirm) {
    let modal = document.getElementById('global-confirm-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'global-confirm-modal';
    modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[250] flex items-center justify-center p-4 animate-fade-in';
    
    // Modern Confirm Design (Destructive/Warning Theme)
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 w-full max-w-sm rounded-3xl p-6 shadow-2xl transform scale-100 transition-all flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-5 text-red-600 dark:text-red-400">
                <i data-lucide="alert-triangle" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">${title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">${message}</p>
            <div class="flex gap-3 w-full">
                <button id="confirm-cancel-btn" class="flex-1 py-3.5 rounded-xl font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                <button id="confirm-ok-btn" class="flex-1 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 transition-all">Confirm</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    if (typeof lucide !== 'undefined') lucide.createIcons();

    document.getElementById('confirm-cancel-btn').onclick = () => modal.remove();
    document.getElementById('confirm-ok-btn').onclick = () => {
        if(typeof onConfirm === 'function') onConfirm();
        modal.remove();
    };
}

/* --- THEME LOGIC --- */
function initTheme() {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDark);
}

function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
}

function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        document.querySelectorAll('.icon-sun').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.icon-moon').forEach(el => el.classList.add('hidden'));
        updateFavicon(true);
    } else {
        document.documentElement.classList.remove('dark');
        document.querySelectorAll('.icon-sun').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.icon-moon').forEach(el => el.classList.remove('hidden'));
        updateFavicon(false);
    }
}

function updateFavicon(isDark) {
    const favicon = document.getElementById('favicon');
    if (favicon) { favicon.href = 'images/fundflow-logo.png'; }
}

/* --- SETTINGS LOGIC --- */
function toggleSettings(show) { 
    const m = document.getElementById('settings-modal'); 
    if(m) {
        m.classList.toggle('hidden', !show); 
        if(show) {
            if (document.getElementById('setting-amount')) document.getElementById('setting-amount').value = state.recurring.amount;
            if (document.getElementById('setting-frequency')) document.getElementById('setting-frequency').value = state.recurring.frequency || 'weekly';
            if (document.getElementById('setting-day')) document.getElementById('setting-day').value = state.recurring.day;
            if (document.getElementById('setting-date')) document.getElementById('setting-date').value = state.recurring.date || 1;
            if (document.getElementById('setting-dashboard-view')) document.getElementById('setting-dashboard-view').value = state.settings.dashboardView || 'weekly';
            updateSettingsUI();
        }
    }
}

function updateSettingsUI() {
    const freq = document.getElementById('setting-frequency').value;
    document.getElementById('setting-weekly-container').classList.toggle('hidden', freq !== 'weekly');
    document.getElementById('setting-monthly-container').classList.toggle('hidden', freq !== 'monthly');
}

function saveSettings() {
    state.recurring.amount = Number(document.getElementById('setting-amount').value);
    state.recurring.frequency = document.getElementById('setting-frequency').value;
    state.recurring.day = Number(document.getElementById('setting-day').value);
    state.recurring.date = Number(document.getElementById('setting-date').value);
    if(document.getElementById('setting-dashboard-view')) {
        state.settings.dashboardView = document.getElementById('setting-dashboard-view').value;
    }
    
    saveData();
    toggleSettings(false);
    
    if (typeof window.renderApp === 'function') {
        window.renderApp();
    }
}

/* --- STORAGE LOGIC --- */
function loadState() { 
    const s = localStorage.getItem(APP_KEY); 
    if(s) { 
        try { 
            const loaded = JSON.parse(s);
            state = { ...state, ...loaded };
            if(!state.accounts) state.accounts = [];
            if(!state.allocations) state.allocations = [];
            if(!state.savings) state.savings = [];
            if(!state.savingsHistory) state.savingsHistory = [];
            if(!state.expenses) state.expenses = [];
            if(!state.transfers) state.transfers = [];
            if(!state.categories) state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
            if(!state.settings) state.settings = { dashboardView: 'weekly' };
        } catch(e) { console.error("Corrupt state", e); } 
    } 
}

function saveData() { 
    localStorage.setItem(APP_KEY, JSON.stringify(state)); 
}

/* --- SHARED RENDERERS --- */
function renderAccountsSidebar() {
    const sidebarList = document.getElementById('accounts-list');
    if(!sidebarList) return;
    
    const savingsBySource = {};
    state.savings.forEach(goal => {
        if (goal.includeInTotal) savingsBySource[goal.source] = (savingsBySource[goal.source] || 0) + Number(goal.current);
    });

    sidebarList.innerHTML = state.accounts.map(acc => {
        let provider = PROVIDERS.find(p => p.id === acc.providerId) || { color: 'bg-gray-600', icon: 'wallet' };
        const isCredit = acc.type === 'credit' || acc.tag === 'credit';
        // Use acc.id instead of acc.providerId to match goal.source
        const savingsHere = savingsBySource[acc.id] || 0;
        const total = acc.balance + savingsHere;
        
        let typeLabel = '';
        if(acc.tag === 'savings') typeLabel = 'Savings';
        else if(acc.tag === 'daily') typeLabel = 'Daily';
        else if(isCredit) typeLabel = 'Credit';

        const lockedBadge = savingsHere > 0 
            ? `<div class="flex items-center gap-1 text-[9px] text-orange-500 font-medium mt-0.5"><i data-lucide="lock" class="w-3 h-3"></i> ₱${savingsHere.toLocaleString()} locked</div>` 
            : '';

        return `<div class="flex justify-between items-start p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div class="flex items-center gap-2 overflow-hidden">
                <div class="w-8 h-8 rounded-md ${provider.color} flex items-center justify-center text-white shrink-0"><i data-lucide="${provider.icon}" class="w-4 h-4"></i></div>
                <div class="overflow-hidden">
                    <span class="text-xs font-bold text-gray-700 dark:text-gray-300 truncate block">${acc.name}</span>
                    <span class="text-[10px] text-gray-400 block">${typeLabel}</span>
                    ${lockedBadge}
                </div>
            </div>
            <span class="text-xs font-bold ${isCredit ? 'text-red-500' : 'text-gray-900 dark:text-white'}">₱${total.toLocaleString()}</span>
        </div>`
    }).join('') || '<div class="text-xs text-gray-400 text-center py-2">No accounts</div>';
}

function updateTotals() {
    const elAssets = document.getElementById('total-assets-display');
    if(elAssets) {
        let liquid = 0;
        const savingsBySource = {};
        state.savings.forEach(goal => {
            if (goal.includeInTotal) savingsBySource[goal.source] = (savingsBySource[goal.source] || 0) + Number(goal.current);
        });
        state.accounts.forEach(acc => {
            if (acc.tag !== 'credit' && acc.type !== 'credit') {
                liquid += acc.balance + (savingsBySource[acc.id] || 0);
            }
        });
        elAssets.innerText = `₱${liquid.toLocaleString()}`;
    }
}