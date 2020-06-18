import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
const Fecha = ({ fecha }) => {
    const today = dayjs(fecha).locale('es').format('DD/MM/YYYY');
    return (
        <p>{today}</p>
    );
}

export default Fecha;