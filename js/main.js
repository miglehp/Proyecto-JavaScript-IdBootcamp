const domToggleCrear = document.querySelector('#toggleCrear');
const domToggleFiltro = document.querySelector('#toggleFiltro');
const domCrearTareas = document.querySelector('#crearForm');
const domFiltros = document.querySelector('#filtros');
const domListaTareas = document.querySelector('#listaTareas');
const domSelectFiltro = document.querySelector('#selectFiltro');
const domFiltroSearch = document.querySelector('#filtroSearch');
const domFiltroSearchBtn = document.querySelector('#filtroSearchBtn');

printTareas(tareas);

domToggleCrear.addEventListener('click', toggleCrearFiltrar);
domToggleFiltro.addEventListener('click', toggleCrearFiltrar);

domSelectFiltro.addEventListener('change', filtrarPorPrioridad);
domFiltroSearch.addEventListener('keydown', filtrarPorNombre);
domFiltroSearchBtn.addEventListener('click', filtrarPorNombre);