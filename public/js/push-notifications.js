import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getMessaging, getToken } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js';

export const inicializarFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBWesQzdlvAJ6PWzGM6B6esbSjK33LW6Qk",
    authDomain: "fmc-validate.firebaseapp.com",
    projectId: "fmc-validate",
    storageBucket: "fmc-validate.appspot.com",
    messagingSenderId: "351947210261",
    appId: "1:351947210261:web:c2b628a459d175a5c5981c",
    measurementId: "G-TPJYXRGP7T"
  };

  initializeApp(firebaseConfig);
}

export const pedirPermissaoParaReceberNotificacoes = async () => {
  try {
    const messaging = getMessaging();    
    getToken(messaging, {
      vapidKey:'BKF8ezD-nPmyegquSCpaFgv2osmL7fOcvkuu4p3yAe3J4UhwWtFhlXM_AihzDapQG4tRrHSYbos0szSNbPyP8zk'
    }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('token do usuário:', currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
    
    //return token;
  } catch (error) {
    console.error(error);
  }
}