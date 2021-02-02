//Requiere un paquete llamado FilesSystem
let fs = require('fs');



let listar = (base, limite) => {

    let data = '';

    for (i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }


    console.log(data);

}


let crear = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ingresado no es un numero');
            return; //Para que no continue en el caso de que el valor no sea un numero
        }

        let data = '';

        for (i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //metodo de FilestSystem, nos permie crear archivos con datos
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);

            setTimeout(() => {

                resolve({
                    nombre: `tabla-${base}`,
                    base
                })

            }, 3000);


        });

    });

}


// Forma de exportar un objeto. Es mas eficiente ya que podemos cargar muchas propiedades
module.exports = {
    //crearArchivo: crearArchivo 
    crear, //Al tener el mismo nombre no requerimos repetirlo
    listar
}