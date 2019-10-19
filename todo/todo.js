const fs = require('fs');

let listadoTodo = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('./db/data.json', data,( err ) => {
        if (err) throw new Error('No se pudo guardar');
        else
        console.log('Archivo guardado');
    });
};

const cargarDb = () => {
    try {
        listadoTodo = require('../db/data.json');
    } catch (error) {
        listadoTodo = [];
    }
};

const crear = (description) => {
    cargarDb();
    let todo = {
        description,
        completado: false
    };
    listadoTodo.push(todo);
    guardarDb();
    return todo;
};

const getListado = () => {
    cargarDb();
    return listadoTodo;
}

const actualizar = ( description, completado = true ) => {
    cargarDb();
    let index = listadoTodo.findIndex( tarea => tarea.description === description );
    if( index >= 0 ){
        listadoTodo[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const eliminar = ( description ) => {
    cargarDb();
    let nuevoListado = listadoTodo.filter( tarea => {
        return tarea.description !== description;
    });

    if( nuevoListado.length == listadoTodo.length){
        return false;
    } else {
        listadoTodo = nuevoListado;
        guardarDb();
        return true;
    }
};

module.exports = {
    crear,
    guardarDb,
    getListado,
    actualizar,
    eliminar
}