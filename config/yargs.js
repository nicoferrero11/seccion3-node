let opts = {
    base: { //base es el argumento a recibir
        demand: true, //indica que es obligatorio
        alias: 'b' //alias (o sea, puedo poner en consola    node app listar --base 10    o    node app listar -b 10)
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto si el usuario no envia nada
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help() //agrega la ayuda.   node app listar --help    o    node app --help (para ver todos los comandos)
    .argv; //Argumentos

module.exports = {
    argv
}