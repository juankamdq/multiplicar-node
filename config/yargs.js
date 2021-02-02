const opt = {
    //variable a utilizar en consola. EJ: nodemon app.js listar --base=2
    base: {
        //Obliga a declarar en consola la base
        demandOption: true,
        //Nombre resumido para declarar la base. EJ: nodemon app.js listar -b=2 o --base=2
        alias: 'b'
    },

    limite: {
        alias: 'l',
        default: 10
    }
}



module.exports.argv = require('yargs')
    .command('listar', 'Permite calcular una tabla de multiplicar', opt)
    .command('crear', 'Permite crear archivos de multiplicar limitando la base', opt)
    .help() //Si lo declaro imprime los comandos generados en consola
    .argv;