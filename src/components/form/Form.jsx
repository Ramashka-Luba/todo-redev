import { useState } from 'react';

import './Form.css'


const Form = ({tasks, setTasks}) => {
    
    const [text,setText] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        // console.log("---handleClick---");
        if(text) { // условие чтоб не добовляла пустую строку
            setTasks([...tasks, {id: tasks.length+1 , title: text, completed: false}]);
        }
        
        setText(''); //для того чтоб импут очищался 
    };
        


    return (
        <form className="form">
            <input onChange = {(e) => setText(e.target.value)} value = {text} className="input" placeholder="Add todo"/>
            <button onClick = {(e) => handleClick(e)} className="add">Add Todo</button>
        </form>
    );
}

export default Form;





// import React, { useState } from "react"; 
// import s from "./Form.css";

// const Form = ({setInputText, todos, setTodos, inputText}) => {

// const inputTextHandler = (event) => {
//     setInputText(event.target.value);
// }

// const submitTodoHandler = (event) => {
//     event.preventDefault(); // предотвращает обновление стр при нажитии на кнопку добавить 
//     if (inputText) { //inputText !==""
//         setTodos ([
//             ...todos,
//             {id: todos.length, text: inputText, completed: false}
//         ]);
//         setInputText(''); // после того как inputText попадает в todos, импут очищается 
//     }
// };


//     return (
//         <form className="form">
//             <input value={inputText} onChange={inputTextHandler} className="input" type="text" placeholder="Add todo"/>
//             <button onClick ={submitTodoHandler} className="add" type="submit">Add Todo</button>
//         </form>
//     );
// }

// export default Form;