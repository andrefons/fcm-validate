importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js');
const firebaseConfig = {
    apiKey: "AIzaSyBWesQzdlvAJ6PWzGM6B6esbSjK33LW6Qk",
    authDomain: "fmc-validate.firebaseapp.com",
    projectId: "fmc-validate",
    storageBucket: "fmc-validate.appspot.com",
    messagingSenderId: "351947210261",
    appId: "1:351947210261:web:c2b628a459d175a5c5981c",
    measurementId: "G-TPJYXRGP7T"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});