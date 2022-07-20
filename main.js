const listaDeTareas = [];
let tareasCompletas = 0;
let tareasIcompletas = 0;
alert("Tenes 4 tareas pendientes");

function AgregarTarea (tarea){
    listaDeTareas.push (tarea);
}

AgregarTarea({id:1, tarea:"Tarea 1", tablero:"Personal", estado:prompt('Tu tarea esta completa o incompleta?').toLowerCase(), importancia: "Alta"});
AgregarTarea({id:2, tarea:"Tarea 2", tablero:"Personal", estado:prompt('Tu tarea esta completa o incompleta?').toLowerCase(), importancia: "Baja"});
AgregarTarea({id:3, tarea:"Tarea 3", tablero:"Trabajo", estado:prompt('Tu tarea esta completa o incompleta?').toLowerCase(), importancia: "Normal"});
AgregarTarea({id:4, tarea:"Tarea 4", tablero:"Casa", estado:prompt('Tu tarea esta completa o incompleta?').toLowerCase(), importancia: "Normal"});

console.log(listaDeTareas);

const listaDeEstados = listaDeTareas.map ((el)=> el.estado);
console.log (listaDeEstados);

for(let i=0; i<=listaDeEstados.length; i++){
    if(listaDeEstados[i]=='completa'){
        tareasCompletas++;
    }else if(listaDeEstados[i]=='incompleta'){
        tareasIcompletas++;
    }
}

console.log('Cantidad de tareas completas: '+ tareasCompletas);
console.log('Cantidad de tareas incompletas: '+ tareasIcompletas);

if(tareasCompletas==listaDeEstados.length){
    console.log('Felicitaciones! Ya completaste todas las tareas');
}else if(tareasCompletas==listaDeEstados.length/2){
    console.log('Ya estas por la mitad de tu lista, segui asi!');
}else if(tareasCompletas>listaDeEstados.length/2){
    console.log('Vamos! Ya completaste la mayoria de tus tareas');
}else{
    console.log('A seguir completando tareas.');
} 

function BorrarTarea (tareaParaBorrar) {
    const index = listaDeTareas.findIndex((el)=> el.id === tareaParaBorrar);
    listaDeTareas.splice(index,1);
    console.log(listaDeTareas);
}

BorrarTarea(3);
