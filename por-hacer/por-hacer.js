const fs = require('fs');
const colores = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            reject(err)
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        //return listadoPorHacer;
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListadito = () => {

    //let listadito = cargarDB();
    cargarDB();
    let listadito = listadoPorHacer;
    console.log('---Lista locooo---'.green);
    for (let tareita of listadito) {
        console.log(`Descripcion: ${tareita.descripcion}`);
        console.log(`Estado: ${tareita.completado}`);
        console.log('------');
    }
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listadoPorHacer[indice].completado = completado;
        guardarDB();
        return true;
    } else
        return false;

}



const borrar = (descripcion) => {

    cargarDB();
    let indice = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listadoPorHacer.splice(indice, 1);
        guardarDB();
        return true;
    } else
        return false;
}

module.exports = {
    crear,
    getListadito,
    actualizar,
    borrar
}