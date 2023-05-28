import React from 'react'
import "./css/Header.css";
import Logo from '../logo.png'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className='logo-header' src={Logo} alt={Logo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Galeria
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Prótesis Completa</a></li>
                                <li><a className="dropdown-item" href="/">Prótesis Parcial</a></li>
                                <li><a className="dropdown-item" href="/">Prótesis Arañita</a></li>
                                <li><a className="dropdown-item" href="/">Prótesis Cromo Cobalto</a></li>
                                <li><a className="dropdown-item" href="/">Reparación de Prótesis</a></li>
                                <li><a className="dropdown-item" href="/">Placa de Bruxismo</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header