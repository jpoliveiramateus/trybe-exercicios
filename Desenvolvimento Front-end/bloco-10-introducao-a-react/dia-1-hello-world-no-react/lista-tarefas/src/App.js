import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Academia', 'Preparar almoço', 'Jogar lixo para fora', 'Ajudar irmã na lição de casa'];

function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      {taskList.map((task) => Task(task))}
    </div>
  );
}

export default App;
