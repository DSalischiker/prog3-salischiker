import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
const Date = (props) => {
    const today = dayjs('11-06-2020').locale('es').format('DD/MM/YYYY');
    return (
        <p>{today}</p>
    );
}

export default Date;