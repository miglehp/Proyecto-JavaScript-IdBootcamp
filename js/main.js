const domToggleCrear = document.querySelector('#toggleCrear');
const domToggleFiltro = document.querySelector('#toggleFiltro');
const domCrearTareas = document.querySelector('#crearForm');
const domFiltros = document.querySelector('#filtros');
const domListaTareas = document.querySelector('#listaTareas');



printTareas(tareas);

domToggleCrear.addEventListener('click', toggleCrearFiltrar);
domToggleFiltro.addEventListener('click', toggleCrearFiltrar);
