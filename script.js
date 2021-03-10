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

// Captura de cliques e lógica básica
window.onload = function () {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      criarTarefa();
    }
    if (event.target.classList.contains('tarefa')) {
      selectTask(event.target);
    }
  }, false);
};
