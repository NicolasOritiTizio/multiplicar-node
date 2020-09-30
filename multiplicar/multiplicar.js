
// requireds
const fs = require('fs');
const colors = require('colors/safe');
const { Console } = require('console');


const listarTabla = (base, limite = 10) => {


    console.log('==========='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('==========='.green);

    let data = '';

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}


const crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${base} no es un numero`);
            return;
        }

        let data = '';


        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }




        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(colors.green.underline(`tabla-${`${base}-${limite}.txt`}`)); 
        });
    })

}


module.exports = {
    crearArchivo,
    listarTabla
}