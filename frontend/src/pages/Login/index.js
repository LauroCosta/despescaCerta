import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import  './styles.css';



const firebaseApp = firebase.initializeApp(firebaseConfig);



class Login extends Component {

 render() {
    const { user, signOut, signInWithGoogle } = this.props;
  
    return (
      <div>
        {
          user ? <p>Olá, { user.displayName }</p>
          : <p>Logar</p>

        }
        {

         user 
          ? <button onClick={signOut}>Sair</button>
          : <button onClick={signInWithGoogle}>Login</button>
        }

      </div>
      
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);