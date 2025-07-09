// Import Tailwind + AOS CSS
import "../css/assets.css";
import "aos/dist/aos.css";

// Import JS libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

import { app } from '../keys/keys.js';

// Initialize Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM elements
const loginModal = document.getElementById('loginModal');
const logoutModal = document.getElementById('logoutModal');
const authButton = document.getElementById('authButton');
const authButtonMobile = document.getElementById('authButtonMobile');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const closeModal = document.getElementById('closeModal');
const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
const toastContainer = document.getElementById('toastContainer');

// Modal controls
function openModal() {
    loginModal.classList.remove('hidden');
}

function closeModalFn() {
    loginModal.classList.add('hidden');
}

function openLogoutModal() {
    logoutModal.classList.remove('hidden');
}

function closeLogoutModal() {
    logoutModal.classList.add('hidden');
}

// Toast notification function
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    toast.className = `${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 transform transition-all duration-300 translate-x-full`;
    toast.innerHTML = `
        <i class="fas ${icon} text-lg"></i>
        <span class="font-medium">${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-auto text-white hover:text-gray-200">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 300);
    }, 5000);
}

// Google Sign-In
async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Login successful:', user);
        closeModalFn();
        showToast('Successfully logged in!', 'success');
    } catch (error) {
        console.error('Login error:', error);
        showToast('Login failed. Please try again.', 'error');
    }
}

// Sign Out
async function signOutUser() {
    try {
        await signOut(auth);
        console.log('User signed out');
        showToast('Successfully logged out!', 'success');
    } catch (error) {
        console.error('Sign out error:', error);
        showToast('Logout failed. Please try again.', 'error');
    }
}

// Update UI based on auth state
function updateAuthUI(user) {
    if (user) {
        // User is logged in
        const displayName = user.displayName || user.email;
        const shortName = displayName.split(' ')[0] || displayName.split('@')[0];
        
        authButton.innerHTML = `<i class="fas fa-user mr-2"></i><span>${shortName}</span>`;
        authButton.onclick = openLogoutModal;
        
        authButtonMobile.innerHTML = `<i class="fas fa-user mr-2"></i><span>${shortName}</span>`;
        authButtonMobile.onclick = openLogoutModal;
    } else {
        // User is not logged in
        authButton.innerHTML = `<i class="fas fa-sign-in-alt"></i><span>Login</span>`;
        authButton.onclick = openModal;
        
        authButtonMobile.innerHTML = `<i class="fas fa-sign-in-alt"></i><span>Login</span>`;
        authButtonMobile.onclick = openModal;
    }
}

// Event listeners
googleLoginBtn.addEventListener('click', signInWithGoogle);
closeModal.addEventListener('click', closeModalFn);
confirmLogoutBtn.addEventListener('click', () => {
    signOutUser();
    closeLogoutModal();
});
cancelLogoutBtn.addEventListener('click', closeLogoutModal);

// Close modal when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModalFn();
    }
});

logoutModal.addEventListener('click', (e) => {
    if (e.target === logoutModal) {
        closeLogoutModal();
    }
});

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    updateAuthUI(user);
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!loginModal.classList.contains('hidden')) {
            closeModalFn();
        }
        if (!logoutModal.classList.contains('hidden')) {
            closeLogoutModal();
        }
    }
});

// Export for other modules if needed
export { auth, signInWithGoogle, signOutUser };