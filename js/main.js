const domToggleCrear = document.querySelector('#toggleCrear');
const domToggleFiltro = document.querySelector('#toggleFiltro');
const domCrearTareas = document.querySelector('#crearForm');
const domFiltros = document.querySelector('#filtros');
const domListaTareas = document.querySelector('#listaTareas');
const domSelectFiltro = document.querySelector('#selectFiltro');
const domFiltroSearch = document.querySelector('#filtroSearch');
const domFiltroSearchBtn = document.querySelector('#filtroSearchBtn');
const domTextCrear = document.querySelector('#crearText');
const domSelectCrear = document.querySelector('#selectCrear');
const domBtnCrear = document.querySelector('#crearBtn');
const domlistaTareas = document.querySelector('#listaTareas');
const domBotonBorrar = document.querySelector('#deleteBtn');
const domMensajeListaVacia = document.querySelector('#mensajeListaVacia')

printTareas(tareas);

domToggleCrear.addEventListener('click', toggleCrearFiltrar);
domToggleFiltro.addEventListener('click', toggleCrearFiltrar);

domSelectFiltro.addEventListener('change', filtrarPorPrioridad);
domFiltroSearch.addEventListener('keydown', filtrarPorNombre);
domFiltroSearch.addEventListener('keyup', verificarCampoVacio);
domFiltroSearchBtn.addEventListener('click', filtrarPorNombre);

domBtnCrear.addEventListener('click', insertTarea);
domTextCrear.addEventListener('keydown', preventEnter);

domSelectCrear.addEventListener('change', clearValidator);
domTextCrear.addEventListener('keyup', clearValidator);

domListaTareas.addEventListener('change', guardarSeleccion);

domBotonBorrar.addEventListener('click', borrarSeleccion);