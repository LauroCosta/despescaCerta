import React, { Component } from 'react';
import api from "../../services/api";


import logo from "../../assets/logo.svg";
import  './styles.css';

export default class Main extends Component {
 state = {
    
    nurseryNumber: 0,
    shirimpCount: 0,
    sampleWeight: 0,
    
 };
  
 handleSubmit = async e => {
    e.preventDefault();

    
    const response = await api.post('biometrys',{

        nurseryNumber: this.state.nurseryNumber,
        shirimpCount: this.state.shirimpCount,
        sampleWeight: this.state.sampleWeight,
        grammage: this.state.sampleWeight/this.state.shirimpCount
        
    })
    console.log(response.data);
 } 
  
 handleInputChange = e => {

    this.setState({ nurseryNumber: e.target.value.id, shirimpCount: e.target.value.id, sampleWeight: e.target.value.id })
    //this.setState({ .id })
    //this.setState({ .id })
 }
  

 render() {
    return (

        <div id="main-container">
            <form onSubmit={this.handleSubmit} >
                <img src={logo} size={30} alt=""/>

                <h1>Biometria</h1>
                

                <label>Viveiro</label>
                <input type="number"
                  placeholder= "Número do viveiro"
                  value={this.state.nurseryNumber}
                  onChange={this.handleInputChange}
                />

                <label>Quantidade Camarão</label>
                <input type="number"
                  placeholder= "Quant. camarões"
                  value={this.state.shirimpCount}
                  onChange={this.handleInputChange}
                />
                <label>Peso amostra (gramas) </label>
                <input type="number"
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