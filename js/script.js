//
// Lista de tareas
//
const formulario = document.getElementById('new-task-form');
const lista = document.getElementById('task-list');

let contadorTareas = 0;

const tareas = [];

formulario.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(formulario.elements[0].value);

    const item = document.createElement('li');
    item.className = 'task-list_item';

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id',`tarea-${contadorTareas}`);

    const label = document.createElement('label');
    label.setAttribute('for', `tarea-${contadorTareas}`);

    label.innerHTML = formulario.elements[0].value;

    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);

    const miTarea = {
        id: contadorTareas,
        nombre: formulario.elements[0].value,
        completo: false,
    };
    tareas.push(miTarea);
    console.log(tareas);

    contadorTareas++;
    formulario.elements[0].value = '';
})