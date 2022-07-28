const listaDeTareas = [];

const taskInput = document.querySelector(".task-input");
const buttonTask = document.querySelector(".button-task");
const toDoTask = document.querySelector(".to-do-tasks");
const deleteButton = document.querySelector(".delete-task");

const listName = document.querySelector(".list-name");
const buttonList = document.querySelector(".button-list");
const listInpunt = document.querySelector(".list-input");


buttonTask.addEventListener("click", addTask);

function addTask(addingTask){
    addingTask.preventDefault();
    let newTask = document.createElement('li')
    newTask.innerHTML = `
    <li class="to-do-tasks-item">                   
        <div>
            <input class="form-check-input me-1" type="checkbox" value="">
            <label for="form-check-input">${taskInput.value}</label>
        </div>
        <div class="task-button">
            <button class="btn btn-sm btn-success task-done"><i class="fa-solid fa-check"></i></i></button>
            <button class="btn btn-sm btn-danger delete-task"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </li>`
    toDoTask.appendChild(newTask);
    listaDeTareas.push(taskInput.value);
}
console.log(listaDeTareas,"esta es la lista de tareas");

buttonList.addEventListener("click", addList);
function addList(addingList){
    addingList.preventDefault();
    let newList = document.createElement('li')
    newList.innerHTML = `<li class="list-name-item">${listInpunt.value}</li>`
    listName.appendChild(newList);
}


/*let tareasCompletas = 0;
let tareasIcompletas = 0;

function AgregarTarea (tarea){
    listaDeTareas.push (tarea);
}

AgregarTarea({id:1, tarea:"Tarea 1", lista:"Personal", estado:"Completa", importancia: "Alta"});
AgregarTarea({id:2, tarea:"Tarea 2", lista:"Personal", estado:"Completa", importancia: "Baja"});
AgregarTarea({id:3, tarea:"Tarea 3", lista:"Trabajo", estado:"Incompleta", importancia: "Normal"});
AgregarTarea({id:4, tarea:"Tarea 4", lista:"Casa", estado:"Completa", importancia: "Normal"});
console.log(listaDeTareas);

const listaDeEstados = listaDeTareas.map ((estadoTarea)=> estadoTarea.estado);
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
    const index = listaDeTareas.findIndex((idTarea)=> idTarea.id === tareaParaBorrar);
    listaDeTareas.splice(index,1);
    console.log(listaDeTareas);
}

BorrarTarea(3);

const Tableros = ['Personal ', 'Trabajo ', 'Casa '];
let lista = document.querySelector('.tasks-lists');
console.log (tableros); 

Tableros.forEach (item => {
    let tituloLista = document.createElement('div');
    tituloLista.innerHTML =`
    <div class="lista" >${item}</div>
    <form class="form">
    <div class="form__item">
        <input type="text" class="form-control" placeholder="Agregar tarea">
    </div>
    </form>`;
    lista.appendChild(tituloTab);
})
 */


