const fs= require('fs');
const colors=require('colors');

let listadoPorHacer=[];
let listadoNuevo=[];

const guardarDB=()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)
                throw new Error('No se pudo grabar',err);
        else
                console.log('Guardado con exito');
    });
} 

const cargarDB= ()=>{
    try {
        listadoPorHacer = require('../db/data.json');    
    } catch (error) {
        listadoPorHacer=[];
    }
    
    
}

const crear = (descripcion)=>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const getListado=(filtro=>{
    cargarDB();
    switch(filtro){
        case 1:
            listadoNuevo=listadoPorHacer.filter(tarea=>{
                return tarea.completado===true
            });
        break;
        case 2:
            listadoNuevo=listadoPorHacer.filter(tarea=>{
                return tarea.completado===false
            });
        break;
        case 3:
            listadoNuevo=listadoPorHacer.slice();
        break;

        default:
            console.log('La opcion ingresada en el comando no existe');
            
    }
  
    listadoPorHacer=listadoNuevo.slice();
    for (const tarea of listadoPorHacer) {
        console.log('======================='.green);
        console.log(tarea.descripcion);
        console.log(tarea.completado);
        console.log('======================='.green);
    }
});

const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex((tarea)=>{
            return tarea.descripcion===descripcion;
    });
    
    if(index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

} 

const borrar=(descripcion)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex((tarea)=>{
            return tarea.descripcion===descripcion;
    });

    if(index>=0){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar

};