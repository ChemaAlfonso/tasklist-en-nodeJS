const description = {
    demand: true,
    description: 'Descripción de la tarea',
    alias: 'd'
};
const completado = {
    description: 'Marca como completado o pendiente una tarea',
    alias: 'c',
    default: true
};

const argv = require('yargs')
.command('crear', 'Crear una tarea', {description})
.command('listar', 'Lista las tareas', {
    description:{
        description: 'Descripción de la tarea',
        alias: 'd'
    }
})
.command('eliminar', 'Elimina la tarea', {description})
.command('actualizar', 'Actualiza una tarea', {description, completado})
.help()
.argv;


module.exports = {
    argv
};