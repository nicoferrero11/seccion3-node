//Llevo la configuracion del yargs al archivo yargs.js, debajo coloco el require
// const argv = require('yargs')
//     .command('listar', 'Imprime en pantalla la tabla de multiplicar', { //Si no paso argumentos en listar, muestra el msj de ayuda
//         base: { //base es el argumento a recibir
//             demand: true, //indica que es obligatorio
//             alias: 'b' //alias (o sea, puedo poner en consola    node app listar --base 10    o    node app listar -b 10)
//         },
//         limite: {
//             alias: 'l',
//             default: 10 //valor por defecto si el usuario no envia nada
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar', {
//         base: { //base es el argumento a recibir
//             demand: true, //indica que es obligatorio
//             alias: 'b' //alias (o sea, puedo poner en consola    node app listar --base 10    o    node app listar -b 10)
//         },
//         limite: {
//             alias: 'l',
//             default: 10 //valor por defecto si el usuario no envia nada
//         }
//     })
//     .help() //agrega la ayuda.   node app listar --help    o    node app --help (para ver todos los comandos)
//     .argv; //Argumentos

const argv = require('./config/yargs').argv;

//Puedo hacer lo siguiente:
//multiplicar.crearArchivo(base);
//Pero es mejor hacer por destructuración de objetos, asi que comento la linea de const y agrego la destructuración const {}

//const multiplicar = require('./multiplicar/multiplicar')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//console.log(multiplicar);

//console.log(argv.base);
//console.log(argv); Aqui veo bajo el array _ todos los parametros que se envian desde consola (por ej node app listar).
//En este caso listar está en ese arreglo

let comando = argv._[0]; //Obtengo todos los parametros

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se ha creado el archivo: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
};

//let base = 10; //Pruebo el catch: 'abc'

//console.log(argv.base);
//console.log('Limite', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`Se ha creado el archivo: ${ archivo }`))
//     .catch(err => console.log(err));