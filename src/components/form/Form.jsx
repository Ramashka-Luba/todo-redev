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
