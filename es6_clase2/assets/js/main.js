//Ejercitación ES6

/* Crear un archivo main.js con los siguientes puntos y completar debajo de cada enunciado.
Los valores de cada punto se deben mostrar con un console.log() especificando el dato que se muestra con un enunciado ej: */

/* console.log('1 - El promedio es:', miPromedio); */

/* Completar esta tarea con el link a github */

const alumnos = [{
        nombre: 'Rodrigo Andrade',
        edad: 23
    },
    {
        nombre: 'Nayla Arroyo Lizzio',
        edad: 32
    },
    {
        nombre: 'Marianela De Martino',
        edad: 20
    },
    {
        nombre: 'Axel Julian Dumas Cutuli',
        edad: 19
    },
    {
        nombre: 'Martina Franco',
        edad: 22
    },
    {
        nombre: 'Agustina Garcia Vega',
        edad: 24
    },
    {
        nombre: 'María Agustina Mattioli Pacheco',
        edad: 19
    },
    {
        nombre: 'Franco Picco',
        edad: 33
    },
    {
        nombre: 'Alva Ramírez',
        edad: 27
    },
    {
        nombre: 'Diego Salischiker',
        edad: 29
    },
]

// DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
const arrNames = alumnos.map(({
    nombre
}) => {
    return nombre;
});
console.log("1) arrNames", arrNames);
// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()
const arrStudentsOlder25 = alumnos.filter((alumno) => {
    return alumno.edad > 25;
});
console.log("2) Alumnos +25", arrStudentsOlder25);
// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
const ageSum = alumnos.reduce((a, b) => {
    return a + b.edad;
}, 0);
console.log("3) Suma de edades", ageSum);
// 4. Obtener en una constante la edad de "Franco Picco" usando .find() ( Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find ) y destructuring del resultado. Investigar método includes
const itsFranco = ({
    nombre
}) => {
    return nombre === 'Franco Picco';
};

console.log("4) La edad de Franco Picco es", alumnos.find(itsFranco).edad);
// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const {
    nombre,
    edad
} = alumnos[0];
console.log("5) Primer alumno es", nombre, "y su edad es", edad)
// 6. Obtener un array con aquellos alumnos que empiezan con la letra "M", usando .filter()
const arrNamesWithM = alumnos.filter(({
    nombre
}) => {
    return nombre[0] === 'M';
});
console.log("6) Alumnos cuyos nombres empiezan con M", arrNamesWithM);
// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const arrNewStudents = alumnos.map((alumno) => ({
    ...alumno,
    presente: 'true'
}));

console.log("7) Nuevo array con propiedad presente", arrNewStudents);
// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos
const ageAverage = ageSum / alumnos.length;
console.log("8) El promedio de edad es", ageAverage);

//Async/Await
// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"
console.log("9) API elegida: sunrise-sunset");
//Sunrise and Sunset API -> 'https://api.sunrise-sunset.org/json?lat=-34.606833&lng=-58.436616'


// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)

let getDataWithPromises = new Promise((resolve, reject) => {
    //do a thing (async?)
    async function getData() {
        const response = await fetch('https://api.sunrise-sunset.org/json?lat=-34.606833&lng=-58.436616');
        const data = await response.json();
        return data;
    }
    const mainLogic = async () => {
        try {
            const data = await getData();
            console.log('10) La data con promise', data);
            return data.results;
        } catch (error) {
            console.log("El error es", error);
        }

    };

    if (mainLogic !== undefined) {
        resolve("Stuff worked!");
        mainLogic();
    } else {
        reject(Error("It broke"));
    }
});
getDataWithPromises.then((result) => {
    console.log(result); //"Stuf worked!"
}, (err) => {
    console.log(err); //Error: "It broke"
});

// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida
async function getData() {
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=-34.606833&lng=-58.436616');
    const data = await response.json();
    return data;
}
const mainLogic = async () => {
    try {
        const data = await getData();
        console.log('11) La data con await/async', data);
        const $content = document.querySelector('#content');
        $content.innerHTML = `<p>${JSON.stringify(data.results)}</p>`
        return data.results;
    } catch (error) {
        console.log("El error es", error);
    }

};
const results = JSON.stringify(mainLogic());
// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync
setTimeout(() => {
    console.log("12) Tiene manejo de errores");
}, 1000);
// 13. Si te animás un poco más mostra los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map(). Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent
setTimeout(() => {
    console.log("13) Datos mostrados en pantalla");
}, 2000);