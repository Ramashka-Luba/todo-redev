import { useState } from 'react';

import './App.css';
import Form from './components/form/Form.jsx'
import ToDo from './components/toDo/ToDo.jsx'


const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Orange", completed: false},
    { id: 2, title: "Apple", completed: false},
    { id: 3, title: "Banana", completed: false},
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






/////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import './App.css';

// import Form from './components/form/Form';
// import ToDo from './components/toDo/ToDo';


// function App() {

//   const [inputText, setInputText] = useState('');
//   const [todos, setTodos] = useState([]);

//   return (
//     <div className="App">
//       <div className="inner">
//         <h2 className="title">What's the Plan for Today?</h2>

//         <Form
//           inputText={inputText}
//           todos={todos}
//           setTodos={setTodos}
//           setInputText={setInputText} />

//         <ul className="list">
//           {todos.map((todo, index) => (
//             <ToDo 
//               todos={todos}
//               setTodos={setTodos}
//               text={todo.text}
//               key={todo.id}
//               index={index}
//               todo={todo} />
//           ))}
//         </ul>

//       </div>
//     </div>
//   );
// }

// export default App;






