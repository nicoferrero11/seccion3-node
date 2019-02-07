const argv = require('./config/yargs').argv;

const colors = require('colors/safe'); //paquete para colores consola

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('====================='.red);
        console.log('========Tabla========'.green);
        console.log('====================='.red);
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se ha creado el archivo: ${ colors.green(archivo) }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
};