import React, { useState } from 'react';
import './App.css';

import Form from './components/form/Form';
import ToDo from './components/toDo/ToDo';


function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: "dhsrtjtyj", completed: false},
    {id: 1, text: "dhsrtjtyj", completed: false}
  ]);

  return (
    <div className="App">
      <div className="inner">
        <h2 className="title">What's the Plan for Today?</h2>

        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText} />

        <ul className="list">
          {todos.map((todo) => (
            <ToDo 
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo} />
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;




{/* ------------ Классовая компонента ------------ */ }
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       tastks: [
//         {id: 0, title: 'Create todo list', done: true},
//         {id: 1, title: 'Create todo list1', done: true},
//         {id: 2, title: 'Create todo list2', done: true}
//       ]
//     }
//   }



// addTask = task => {
//   this.setState (state => {
//     let { tasks } = state;
//     tasks.push ({
//       id: tasks.length !==0 ? task.length : 0,
//       title: task,
//       done: false
//     });
//     return tasks;
//   });
// };

//   render() {
//     return (
//       <div className="App">
//         <div className="inner">
//           <Title/>
//           <InputClass addTask = {this.addTask} />
//           {/* <ItemClass /> */}
//         </div>
//       </div>
//     );
//   }
// }
// export default App;


{/* ------------ ------------- ------------ */ }