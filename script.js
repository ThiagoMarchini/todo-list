// Funções utilizadas
function criarTarefa() {
  const task = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  orderedList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

// Captura de cliques e lógica básica
window.onload = function () {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      criarTarefa();
    }
  }, false);
};
