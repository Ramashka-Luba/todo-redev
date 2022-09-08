import React, { useState } from 'react';
import './App.css';

import Form from './components/form/Form';
import ToDo from './components/toDo/ToDo';


function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  // const [edit,setEdit] = useState(false);

  // const changeTodo = (id, editText) => {
  //   console.log("---changeTodo----");
  //   let arr = [
  //     ...todos.map((item) =>
  //       item.id === id ? { ...item, text: editText } : item
  //     ),
  //   ];
  //  console.log(arr);
  //   setTodos(arr);
  // };

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
          {todos.map((todo, index) => (
            <ToDo 
            // changeTodo = {changeTodo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              index={index}
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




    // {id: 0, text: "dhsrtjtyj", completed: false},
    // {id: 1, text: "dhsrtjtyj", completed: false},
    // {id: 2, text: "dhsrtjtyj", completed: false},
    // {id: 3, text: "dhsrtjtyj", completed: false},
    // {id: 4, text: "dhsrtjtyj", completed: false},
    // {id: 5, text: "dhsrtjtyj", completed: false},
    // {id: 6, text: "dhsrtjtyj", completed: false},
    // {id: 7, text: "dhsrtjtyj", completed: false},
    // {id: 8, text: "dhsrtjtyj", completed: false},
    // {id: 9, text: "dhsrtjtyj", completed: false},
    // {id: 10, text: "dhsrtjtyj", completed: false},
    // {id: 11, text: "dhsrtjtyj", completed: false},
    // {id: 12, text: "dhsrtjtyj", completed: false},
    // {id: 13, text: "dhsrtjtyj", completed: false},
    // {id: 14, text: "dhsrtjtyj", completed: false},
    // {id: 15, text: "dhsrtjtyj", completed: false},
    // {id: 16, text: "dhsrtjtyj", completed: false},
    // {id: 17, text: "dhsrtjtyj", completed: false},
    // {id: 18, text: "dhsrtjtyj", completed: false},
    // {id: 19, text: "dhsrtjtyj", completed: false},
    // {id: 20, text: "dhsrtjtyj", completed: false},
    // {id: 21, text: "dhsrtjtyj", completed: false},
    // {id: 22, text: "dhsrtjtyj", completed: false},
    // {id: 23, text: "dhsrtjtyj", completed: false},
    // {id: 24, text: "dhsrtjtyj", completed: false},
    // {id: 25, text: "dhsrtjtyj", completed: false},