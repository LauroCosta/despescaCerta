import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import logo from '../../assets/logodp.png';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import  './styles.css';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {

 render() {
    
    const { user, signOut, signInWithGoogle } = this.props;

  

    return (
      <div>

        <div id="login-container">
            <form onSubmit={this.handleSubmit} >
        
                <img src={ logo}  alt=""/>
              
                <input type="email"
                  placeholder= "Login"
      
                />
                <input type="password"
                  placeholder= "Senha"
                />
                <button id="buttonlogin" type="submit">Entrar</button>
                <hr></hr>
           


            </form>
            
        
            
            {
              <button id="buttongoogle" onClick={signInWithGoogle}>Logar com conta do google</button>
          
            }

                      
        </div>
      
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