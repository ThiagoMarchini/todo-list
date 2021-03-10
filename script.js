// Funções utilizadas
function createTask() {
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

function clearList() {
  const parent = document.getElementById('lista-tarefas');
  removeAllChildNodes(parent);
}

function clearCompleted() {
  const parent = document.getElementById('lista-tarefas');
  const children = document.querySelectorAll('.completed');
  for (let index = 0; index < children.length; index += 1) {
    parent.removeChild(children[index]);
  }
}

function clearSelected() {
  const parent = document.getElementById('lista-tarefas');
  const children = document.querySelector('.selected');
  parent.removeChild(children);
}

// Captura de cliques e lógica básica
window.onload = function () {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      createTask();
    }
    if (event.target.classList.contains('tarefa')) {
      selectTask(event.target);
    }
    if (event.target.id === 'apaga-tudo') {
      clearList();
    }
    if (event.target.id === 'remover-finalizados') {
      clearCompleted();
    }
    if (event.target.id === 'remover-selecionado') {
      clearSelected();
    }
  }, false);
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tarefa')) {
      completeTask(event.target);
    }
  }, false);
};
