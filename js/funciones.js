const resetSeleccionBorrar = () => {
  seleccBorrar = [];
  domBotonBorrar.disabled = true;
};

const clickCrearFiltrar = () => {
  domFiltros.classList.toggle('visually-hidden');
  domCrearTareas.classList.toggle('visually-hidden');
};

const toggleCrearFiltrar = (event) => {
  if (event.target === domToggleCrear) {
    event.target.disabled = true;
    domToggleFiltro.disabled = false;
    clickCrearFiltrar();
  } else if (event.target === domToggleFiltro) {
    event.target.disabled = true;
    domToggleCrear.disabled = false;
    clickCrearFiltrar();
  }
};

const colorPicker = (prioridadStr) => {
  switch (prioridadStr) {
    case 'urgente':
      return 'bg-danger-subtle';
    case 'diaria':
      return 'bg-warning-subtle';
    case 'mensual':
      return 'bg-info-subtle';
  }
};

const buildTarea = (tarea) => {
  let color = colorPicker(tarea.priority);

  let li = document.createElement('li');
  li.classList.add('list-group-item', color);

  let inputRad = document.createElement('input');
  inputRad.classList.add('form-check-input', 'me-1');
  inputRad.type = 'checkbox';
  inputRad.value = '';
  inputRad.id = tarea.id;

  let label = document.createElement('label');
  label.classList.add('form-check-label');
  label.textContent = tarea.title;

  li.appendChild(inputRad);
  li.appendChild(label);

  return li;
};

const printTareas = (arrTareas) => {
  let ulHtml = domListaTareas;
  ulHtml.innerHTML = '';
  if (arrTareas.length < 1) {
    domMensajeListaVacia.classList.remove('visually-hidden');
  } else {
    domMensajeListaVacia.classList.add('visually-hidden');
    arrTareas.forEach((tarea) => ulHtml.appendChild(buildTarea(tarea)));
    resetSeleccionBorrar();
  }
};

const filtrarPorPrioridad = (event) => {
  let prioridad = event.target.value;
  if (prioridad !== '') {
    let listaFiltrada = tareas.filter((tarea) => tarea.priority === prioridad);
    printTareas(listaFiltrada);
  } else {
    printTareas(tareas);
  }
};

const filtrarPorNombre = (event) => {
  let title = domFiltroSearch.value.toLowerCase();
  if (event.key === 'Enter' || event.pointerId === 1) {
    event.preventDefault();
    if (title !== '') {
      let listaFiltrada = tareas.filter((tarea) => tarea.title.toLowerCase().includes(title));
      printTareas(listaFiltrada);
    } else {
      printTareas(tareas);
    }
  }
};

const buildTareaInsert = () => {
  let tarea = {
    id: 0,
    title: '',
    priority: '',
  };
  tarea.id = id;
  tarea.title = domTextCrear.value;
  tarea.priority = domSelectCrear.value;
  return tarea;
};

const validator = (tarea) => {
  let priorityNotValidated = tarea.priority === '';
  let validated = false;

  if (priorityNotValidated) {
    domSelectCrear.classList.add('border', 'border-2', 'border-danger-subtle');
  }
  if (tarea.title === '') {
    domTextCrear.classList.add('border', 'border-2', 'border-danger-subtle');
  } else if (tareas.some((tarea2) => tarea2.title.toLowerCase() === tarea.title.toLowerCase())) {
    domTextCrear.classList.add('border', 'border-2', 'border-danger-subtle');
    domTextCrear.value = '';
  } else {
    validated = !priorityNotValidated;
  }
  return validated;
};

const clearValidator = (event) => {
  event.target.classList.remove('border', 'border-2', 'border-danger-subtle');
};

const insertTarea = () => {
  let tarea = buildTareaInsert();
  if (validator(tarea)) {
    tareas.push(tarea);
    id++;
    printTareas(tareas);
  } else {
  }
};

const preventEnter = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    insertTarea();
  }
};

const guardarSeleccion = (event) => {
  if (event.target.matches('input[type="checkbox"]')) {
    if (event.target.checked) {
      seleccBorrar.push(event.target.id);
    } else {
      let index = seleccBorrar.indexOf(event.target.id);
      seleccBorrar.splice(index, 1);
    }
    if (seleccBorrar.length !== 0) {
      domBotonBorrar.disabled = false;
    } else {
      domBotonBorrar.disabled = true;
    }
  }
};

const borrarSeleccion = () => {
  let tareasActualizada = tareas.filter((tarea) => !seleccBorrar.includes(tarea.id.toString()));
  tareas = tareasActualizada;
  printTareas(tareas);
};

const verificarCampoVacio = (event) => {
  if (event.target.value === '') {
    printTareas(tareas);
  }
};
