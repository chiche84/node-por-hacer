const elemento1 = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true
    }
}
const elemento2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Pa buscar'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Para marcar el completado o pendiente'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento', elemento1)
    .command('actualizar', 'Actualiza el estado', elemento2)
    .command('borrar', 'Borra un elemento', elemento2)
    .help()
    .argv;

module.exports = {
    argv
}