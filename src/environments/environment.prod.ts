/**
 * Replace the variable $FIREBAES_CONFIG
 * with Firebase config from "environment.template.ts"
 * to deploy to Firebase
 */

export const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
