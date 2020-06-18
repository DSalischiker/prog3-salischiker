import React from 'react';
import './index.css';
import 'dayjs/locale/es';
import Fecha from '../Fecha';
import Boton from '../Boton';
const Footer = (props) => {
    const {
        text, fecha
    } = props;
    return (
        <footer className='App-Footer'>
            <h2>{text}</h2>
            <Fecha fecha={fecha} />
            <Boton caption='Boton2' />
        </footer>
    );
}

export default Footer;