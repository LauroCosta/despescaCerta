import React, { Component } from 'react';
import api from "../../services/api";



import  './styles.css';
import { Redirect } from "react-router-dom";

export default class Main extends Component {
 state = {
    
    nurseryNumber: 0,
    shirimpCount: 0,
    sampleWeight: 0,
    
 };
  
 handleSubmit = async e => {
    e.preventDefault();
    
    const response = await api.post('biometrys',{

        'nurseryNumber': this.state.nurseryNumber,
        'shirimpCount': this.state.shirimpCount,
        'sampleWeight': this.state.sampleWeight,
        'grammage': this.state.sampleWeight / this.state.shirimpCount
        
    })

 } 
  
 handleInputChange = e => {

    this.setState({ 
      
      nurseryNumber: e.target.value["numero"],
      shirimpCount: e.target.value["quantidade"],
      sampleWeight: e.target.value["amostra"]
    
    
    });
  
 }
  

 render() {
    return (

        <div id="main-container">
            <form onSubmit={this.handleSubmit} >

                <h1>Biometria</h1>
                

                <label>Viveiro</label>
                <input type="number" name="viveiro" min="0" max="30"
                  placeholder= "Número do viveiro"
                  value={this.state.nurseryNumber}
                  onChange={this.handleInputChange}
                />

                <label>Quantidade Camarão</label>
                <input type="number" name="quantidade" min="0" max="400"
                  placeholder= "Quant. camarões"
                  value={this.state.shirimpCount}
                  onChange={this.handleInputChange}
                />
                <label>Peso amostra (gramas) </label>
                <input type="number" name="Amostra" min="0" max="400"
                  placeholder= "Peso amostra"
                  value={this.state.sampleWeight}
                  onChange={this.handleInputChange}
                />

                <button type="submit">Finalizar</button>
            </form>
        </div>
    );
  }
}