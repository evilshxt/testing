import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDrp0Mv9DswUXCvX2wQcJQ9ZUZBUPaSfcU",
    authDomain: "ascender-equipment.firebaseapp.com",
    projectId: "ascender-equipment",
    storageBucket: "ascender-equipment.firebasestorage.app",
    messagingSenderId: "75299002657",
    appId: "1:75299002657:web:8f5934fbd8418007fd0660",
    measurementId: "G-5J5E05JKFK"
};

export const cloudinaryConfig = {
  cloudName: "dwb1dtct8",
  uploadPreset: "Ascender"
};

const app = initializeApp(firebaseConfig);

// Firebase Auth and Firestore exports
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const auth = getAuth(app);
export const db = getFirestore(app);

export const CONTACT_EMAIL = 'info@ascender.africa';

// Helper function to check if a user is an admin
export function isAdmin(user) {
  return user && user.role === 'admin';
}

export { app, firebaseConfig };