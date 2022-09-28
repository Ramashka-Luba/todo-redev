import { useState } from 'react';

import s from './Form.module.css'


const Form = ({tasks, setTasks}) => {
    
    const [text,setText] = useState('');

    const handleClick = (e) => {
        e.preventDefault() // не перезагружает форму после Enter
        // console.log("---handleClick---");
        if(text) { // условие чтоб не добовляла пустую строку
            setTasks([...tasks, {id: tasks.length+1 , title: text, completed: false}]);
        }
        
        setText(''); //для того чтоб импут очищался 
    };
        


    return (
        <form className={s.form}>
            <input onChange = {(e) => setText(e.target.value)} value = {text} className={s.input} placeholder="Lead the task"/>
            <button onClick = {(e) => handleClick(e)} className={s.add}>Add Todo</button>
        </form>
    );
}

export default Form;
