import React, { Component } from 'react';

import  './styles.css';
import './css/light-bootstrap-dashboard.css';
import './css/pe-icon-7-stroke.css';
import './css/bootstrap.min.css';
import './css/animate.min.css';

export default class Home extends Component {
 state = {
    
    
 };
  
 render() {
    return (
    <div>
        <div class="wrapper">
            <div class="sidebar" data-color="green" data-image="img/camarao.jpeg">

                <div class="sidebar-wrapper">
                    <div class="logo">
                        <a href="dashboard.html" class="simple-text">
                            Despesca Certa
                        </a>
                    </div>

                    <ul class="nav">
                        <li class="active">
                            <a href="dashboard.html">
                                <i class="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pe-7s-user"></i>
                                <p>Biometria</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pe-7s-note2"></i>
                                <p>Atividades</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pe-7s-news-paper"></i>
                                <p>Gastos</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pe-7s-science"></i>
                                <p>Relatórios</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="main-panel">
                <nav class="navbar navbar-default navbar-fixed">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Home</a>
                        </div>
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav navbar-left">
                                <li>
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fa fa-dashboard"></i>
                                        <p class="hidden-lg hidden-md">Dashboard</p>
                                    </a>
                                </li>
                        
                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">
                                        <p>Log out</p>
                                    </a>
                                </li>
                                <li class="separator hidden-lg"></li>
                            </ul>
                        </div>


                    </div>
                </nav>

                <div>
                    <button>erergergerger</button>
                </div>
            </div>
        </div>
    </div>

    );
  }
}