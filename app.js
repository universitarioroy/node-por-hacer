const {argv} = require('./config/yargs');
const {crear,getListado,actualizar,borrar}= require('./por-hacer/por-hacer');


let comando = argv._[0];
switch (comando){
    case 'crear':
       let tarea=crear(argv.descripcion);
       //console.log(tarea);
    break;
    case 'listar':  
        
        getListado(argv.estado);
    break;
    case 'actualizar':
        let actualizado=actualizar(argv.descripcion,argv.completado);
        
        if(actualizado){
            getListado(3);
        }    
    break;
    case 'borrar':  
        let borrado=borrar(argv.descripcion);
        if(borrado){
            getListado(3);
        }    

    break;
    default:
        console.log('Comando desconocido');

}