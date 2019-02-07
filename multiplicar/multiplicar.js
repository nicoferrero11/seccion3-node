const fs = require('fs');

let listarTabla = (base, limite = 10) => { //limite = 10 -> le pone 10 si viene null
    return new Promise((resolve, reject) => {
        //Controlo que "base" sea un número
        if (!Number(base)) {
            reject(`El parámetro '${ base }' no es un número`);
            return;
        }
        //Controlo que "limite" sea un número
        if (!Number(limite)) {
            reject(`El parámetro '${ limite }' no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${  base * i }\n`);
        }
        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        //Controlo que "base" sea un número
        if (!Number(base)) {
            reject(`El parámetro '${ base }' no es un número`);
            return;
        }
        //Controlo que "limite" sea un número
        if (!Number(limite)) {
            reject(`El parámetro '${ limite }' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${ base } * ${ i } = ${  base * i }`);
            data += `${ base } * ${ i } = ${  base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });
    })

}

//Dos formas de exportar la función crearArchivo
/*
    module.exports = {
        crearArchivo //crearArchivo: crearArchivo
    }
    ó
    Cuando se define la función, en vez de let crearArchivo se utiliza: module.exports.crearArchivo = ...
*/

module.exports = {
    crearArchivo,
    listarTabla
};