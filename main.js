let tareasCompletas = 0;
let tareasIcompletas = 0;

function Tareas (tarea, tablero, estado, prioridad){
    this.tarea = tarea;
    this.tablero = tablero;
    this.estado = estado;
    this.prioridad = prioridad;
}

const tarea1 = new Tareas ('Tarea 1', 'Personal', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 1);
const tarea2 = new Tareas ('Tarea 2', 'Trabajo', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 3);
const tarea3 = new Tareas ('Tarea 3', 'Personal', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 4);
const tarea4 = new Tareas ('Tarea 4', 'Hogar', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 6);
const tarea5 = new Tareas ('Tarea 5', 'Facultad', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 2);
const tarea6 = new Tareas ('Tarea 6', 'Personal', prompt('Tu tarea esta completa o incompleta?').toLowerCase(), 5);
console.log(tarea1, tarea2, tarea3, tarea4, tarea5, tarea6);

const listadoDeEstados = [tarea1.estado,tarea2.estado,tarea3.estado,tarea4.estado,tarea5.estado,tarea6.estado];

for(let i=0; i<=listadoDeEstados.length; i++){
    if(listadoDeEstados[i]=='completa'){
        tareasCompletas++;
    }else if(listadoDeEstados[i]=='incompleta'){
        tareasIcompletas++;
    }
}
console.log('Cantidad de tareas completas: '+ tareasCompletas);
console.log('Cantidad de tareas incompletas: '+ tareasIcompletas);

if(tareasCompletas==listadoDeEstados.length){
    console.log('Felicitaciones! Ya completaste todas las tareas');
}else if(tareasCompletas==listadoDeEstados.length/2){
    console.log('Ya estas por la mitad de tu lista, segui asi!');
}else if(tareasCompletas>listadoDeEstados.length/2){
    console.log('Vamos! Ya completaste la mayoria de tus tareas');
}else{
    console.log('A seguir completando tareas.');
}

let suma=0;
function TareasSemanales(semana1, semana2, semana3, semana4) {
    suma= semana1+semana2+semana3+semana4;
}

TareasSemanales (4,8,6,1);
console.log("Tareas realizadas en el mes:" + suma);


