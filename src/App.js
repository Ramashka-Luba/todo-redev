import { useState } from 'react';

import './App.css';
import Form from './components/form/Form.jsx'
import ToDo from './components/toDo/ToDo.jsx'


const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy Orange", completed: false},
    { id: 2, title: "Make a Two Sandwich", completed: false},
    { id: 3, title: "Get a Taxi at 6p.m.", completed: false},
  ]);
  
  const handleDelete = (id) => {
    const filtredArr = tasks.filter((item) => item.id !== id);
    setTasks([...filtredArr]);
  };

  const handleEdit = (id, text) => {
    // console.log("----handleEdit----", id, text);
    const arr = tasks.map (item => item.id === id ? {...item, title: text} : item);
    setTasks([...arr]);
  };

  // console.log(tasks);

  return (
    <div className="App">
      <div className="innerApp">
        <h2 className="titleApp">What's the Plan for Today?</h2>
        <Form
          setTasks={setTasks}
          tasks={tasks} />

        <ul className="list">
          {tasks.map((task) => (
            <ToDo key={task.id}  //чтобы пофиксить ошибку с "key" - корневому элементу добавляем key и присваиваем наш id
                  task = {task}
                  handleDelete = {handleDelete}
                  handleEdit = {handleEdit}
                  tasks = {tasks}
                  setTasks = {setTasks}
            />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;