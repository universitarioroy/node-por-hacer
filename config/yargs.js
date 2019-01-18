
const argv=require('yargs')
    .command('crear','Crea un tarea por hacer',
    {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de la tarea por hacer'
        }
    })
    .command('listar','lista por estados',
    {
        estado:{
            demand:true,
            alias:'s',
            desc:'Descripcion del estado'
        }
    })
    .command('actualizar','Actualiza el estado completado de una tarea',
    {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de la tarea por hacer'
        },
        completado:{
            alias:'c',
            default:true,
            desc:'Marca como completado o pendiente de la tarea'
        }
    })
    .command('borrar','Actualiza el estado completado de una tarea',
    {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Borrado de una tarea'
        }
        
    })
    .help()
    .argv;

module.exports={
    argv
}