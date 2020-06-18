import React from 'react';
import './index.css';
const Boton = props => {
    const { caption } = props;
    const handleClick = (event) => console.log('click', event);
    return (
        <button onClick={handleClick}>{caption || 'A completar'}</button>
    )
}

export default Boton;