// Funções utilizadas
function criarTarefa() {
  const task = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  newTask.className = 'tarefa';
  orderedList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function selectTask(task) {
  const selectedTask = task;
  if (selectedTask.className === 'tarefa') {
    if (document.querySelector('.selected')) {
      const oldSelection = document.querySelector('.selected');
      oldSelection.className = 'tarefa';
    }
    selectedTask.className = 'tarefa selected';
  } else {
    selectedTask.className = 'tarefa';
  }
}

function completeTask(task) {
  const completedTask = task;
  if (completedTask.className === 'tarefa') {
    completedTask.className = 'tarefa completed';
  } else {
    completedTask.className = 'tarefa';
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function limpaLista() {
  const parent = document.getElementById('lista-tarefas');
  removeAllChildNodes(parent);
}

// Captura de cliques e lógica básica
window.onload = function () {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      criarTarefa();
    }
    if (event.target.classList.contains('tarefa')) {
      selectTask(event.target);
    }
    if (event.target.id === 'apaga-tudo') {
      limpaLista();
    }
  }, false);
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tarefa')) {
      completeTask(event.target);
    }
  }, false);
};
