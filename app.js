const argv = require('./config/yargs').argv;
const { crear, listar } = require('./multiplicar');




const command = argv._[0]; //Retorna el commando

switch (command) {

    case 'listar':
        console.log('listar');
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crear(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Se creo el archivo ${archivo.nombre} base ${archivo.base}`);
            })
            .catch(err => console.log(err));

        break;
    default:
        console.log('Ingreso un commando no valido');
        break;
}