import firebase from "firebase/app";
import "firebase/auth";

const authGuard = (to, from, next) => {
    console.log('authGuard');
  const authListener = firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      // L'utilisateur n'est pas connecté : redirection vers la page d'accueil
      alert(`AUTHGUARD
            Vous devez être connecté pour voir ceci. 
            Redirection à la page d\'accueil.`);
      next("/home");
    } else {
      // L'utilisateur est connecté : autoriser la navigation
      next();
    }
  });

  authListener();
};

export default authGuard;