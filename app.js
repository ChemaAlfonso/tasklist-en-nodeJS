const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        console.log('crear');
        let tarea = todo.crear(argv.description);

        break;
    case 'listar':
        let listado = todo.getListado();
        console.log('========To do========='.green);
        for (const tarea of listado) {
            console.log( colors.yellow( tarea.description ) );
            if( tarea.completado == 'true' ){
                console.log( 'Estado', colors.green( 'Completado' ) );
            } else {
                console.log( 'Estado', colors.red( 'Por hacer' ) );
            }
        }
        console.log('======================'.green);
        break;
    case 'actualizar':
        let actualizado = todo.actualizar( argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'eliminar':
    let eliminado = todo.eliminar( argv.description );
    console.log(eliminado);
    break;


    default:
        console.log('comando no reconocible');
        break;
}