import { useState } from 'react';

import s from './Form.module.css'


const Form = ({tasks, setTasks}) => {
    
    // const [text,setText] = useState('');
    // const [date,setDate] = useState('');
    // const [count,setCount] = useState(1);
    const [data,setData] = useState({
        // title: "Milk",
        // date: "2022-10-19",
        // count: 2,
        // completed: false,
    });

    const handleClick = (e) => { //добавить новую таску
        e.preventDefault() // не перезагружает форму после Enter
        // if(text) { // условие чтоб не добовляла пустую строку
        //     setTasks([...tasks, {id: tasks.length+1, title: text, completed: false}]);
        // }      
        // setText(''); //для того чтоб импут очищался 
// -------------------------
        // const obj = {id: tasks.length+1, title: text, date: date, count:count,  completed: false}
        // console.log(obj);
// -------------------------
        data.id = tasks.length + 1;
        if (data.title) { // условие чтоб не добовляла пустую строку
            setTasks([...tasks, data]);
        } 
        setData({//для того чтоб импут очищался 
            title: "",
            date: "",
            count: "",
            completed: false,
        }); 
    };

    return (
        <form onSubmit={(e) => handleClick(e)} className={s.form}> {/* e - для preventDefault*/}
            <input onChange = {(e) => setData({...data, title : e.target.value})}
                value = {data.title} 
                className={s.input} 
                placeholder="Lead the task"/>
            <input type="date" 
                onChange = {(e) => setData({...data, date : e.target.value})}
                value = {data.date} 
                className={s.input} 
                placeholder="Lead the task"/>
            <input type="number" 
                onChange = {(e) => setData({...data, count : e.target.value})}
                value = {data.count} 
                className={s.input} 
                placeholder="Lead the task"/>
            <button onClick = {(e) => handleClick(e)} className={s.add}>Add Todo</button>
        </form>
    );
}

export default Form;
