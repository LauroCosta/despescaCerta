import React, { Component } from 'react';
import api from "../../services/api";

import  './styles.css';

export default class Main extends Component {
 
   state = {
    
    biometrics : []

 };
  
 componentDidMount() {

    this.loadBiometrics();
 }

 loadBiometrics = async () => {

   const response = await api.get("/biometrys");

   this.setState({ biometrics: response.data });
   console.log("igigi" + this.state.data);

 }

 render() {

    return (

        <div className="biometrics-list">
            {this.state.biometrics.map(biometric => (

               <h2>viveiro: {biometric.nurseryNumber} gramatura: {biometric.grammage} g</h2>

            ))}
        </div>
    );
  }
}