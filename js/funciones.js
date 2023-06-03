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

  arrTareas.forEach((tarea) => ulHtml.appendChild(buildTarea(tarea)));
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
