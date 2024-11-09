import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";



export default class Headers extends React.Component {

    render() {
        return(
            <header>
                <nav class="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
                    <div class="container-fluid">
                        <p>JOHN DOE</p>
                        <div class="collapse navbar-collapse d-flex" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="#">HOME</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">SERVICES</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">PORTFOLIO</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">CONTACT</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">MENTIONS LEGALES</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
} 






