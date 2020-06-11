import React from 'react';
import './index.css';
import 'dayjs/locale/es';
import Date from '../Date';
const Footer = (props) => {
    const {
        text, date
    } = props;
    return (
        <footer className='App-Footer'>
            <h2>{text}</h2>
            <Date />
        </footer>
    );
}

export default Footer;