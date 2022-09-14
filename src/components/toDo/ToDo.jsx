import './ToDo.css';
import { useState, useEffect, useRef } from "react";
// import Done from "./../../assets/done.png";
import Edit from "./../../assets/edit.png";
import Delete from "./../../assets/delete.png";
import Save from "./../../assets/save.png";


const ToDo = ({ task, handleDelete, handleEdit, tasks, setTasks }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(task.title);

    const handleComplete = () => {
        setTasks(tasks.map( item => {
            if (item.id === task.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
        // console.log("handleComplete");
    }

    const toglle = () => {
        if (isEdit) {
            handleEdit(task.id, text);
            setIsEdit(!isEdit);
        } else {
            setIsEdit(!isEdit);
        }
    };

    //---------Задать фокус на инпут---------//
    const inputEl = useRef(null);
    const onFocusInput = () => {
        inputEl.current.focus(); // current указывает на смонтированный элемент input
    };

    // componentDidMount
    // useEffect( () => { 
    //     inputEl.current.focus();
    // }, []);
 //---------Задать фокус на инпут---------//


    return (
        <>
            <div className={`innerItem ${task.id % 2 === 0 && "bg-color"}`}>
                <div className="wrap-left">
                    {/* <button onClick = {handleComplete} className="btn btn-done">
                        <img src={Done} alt="done" />
                    </button> */}
                    <div className="checkbox" onClick = {handleComplete} >
                        <input className="checkboxInput" type="checkbox" />
                    </div>
                    {isEdit
                        ? <input className="input-edit" ref={inputEl} onChange={(e) => setText(e.target.value)} value={text} />
                        : <div className={`task-text ${task.completed && "completed"}`}>{task.title}</div>}
                </div>
                <div className="wrap-rigth">
                    <button className="btn btn-delete" onClick={() => handleDelete(task.id)}><img src={Delete} alt="delete" /></button>
                    <button className="btn btn-edit" onClick={() => toglle()}> {isEdit ? <img src={Save} alt="save" /> : <img onClick = {onFocusInput} src={Edit} alt="edit" />} </button>
                </div>
            </div>
        </>
    );
}

export default ToDo;