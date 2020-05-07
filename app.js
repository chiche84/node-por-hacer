const argvObj = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argvObj);

let comando = argvObj._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear funca');
        let tarea = porHacer.crear(argvObj.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('Listar');
        porHacer.getListadito();

        break;
    case 'actualizar':
        //console.log('Actualizar funca');
        let actualizado = porHacer.actualizar(argvObj.descripcion, argvObj.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borradito = porHacer.borrar(argvObj.descripcion);
        console.log(borradito);
        break;
    default:
        console.log('Comando no reconocido');
        break;

}