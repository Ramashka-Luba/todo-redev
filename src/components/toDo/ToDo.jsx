import s from "./ToDo.css";
import Delete from "./../../assets/delete.png";
import Edit from "./../../assets/edit.png";
import Done from "./../../assets/done.png";
import Save from "./../../assets/save.png";
import { useState } from "react";

const ToDo = ({ id, text, todo, todos, setTodos, index }) => {
    
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(text);
    
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id)); //создает новый список todos, без удаляемого todo
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    const changeTodo = (id, editText) => {
        console.log("---changeTodo----");
        let arr = [
            ...todos.map((item) =>
                item.id === id ? { ...item, text: editText } : item
            ),
        ];
        console.log(arr);
        setTodos(arr);
    };

    const handleButton = () => {
        if (isEdit) {
            setIsEdit(!isEdit);
            changeTodo(id, editText);
        } else {
            setIsEdit(!isEdit);
        }
    };

    return (
        <div className={`innerItem ${index % 2 == 0 && "bg-color"}`}>

            {isEdit
                ? <input className="input-edit" value={editText} onChange={(event) => setEditText(event.target.value)} />
                : <div className={`item ${todo.completed && "completed"} `}>{text}</div>
            }

            <div className="wrap">

                <button onClick={completeHandler} className="btn btn-done">
                    <img src={Done} alt="done" />
                </button>

                <button onClick={() => handleButton()} className="btn btn-edit">
                    {isEdit
                        ? <img src={Save} alt="save" />
                        : <img src={Edit} alt="edit" />}
                </button>

                <button onClick={deleteHandler} className="btn btn-delete">
                    <img src={Delete} alt="delete" />
                </button>


            </div>
        </div>
    );
}

export default ToDo;