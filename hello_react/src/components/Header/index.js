import React from 'react';
import Boton from '../Boton';
const Header = ({ name }) => {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
                Bienvenido {name}
            </p>
            <Boton caption='Boton1' />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    );
}

export default Header;