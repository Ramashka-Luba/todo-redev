import s from "./ToDo.css";
import Delete from "./../../assets/delete.png"
import Edit from "./../../assets/edit.png"

const ToDo = ({text, todo, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id)); //создает новый список todos, без удаляемого todo
    };

    return (
        <div className="innerItem">
            <div className="item">
                {text}
            </div>
            <div className="wrap">
                <button onClick={deleteHandler} className="delete">
                    <img src={Delete} alt="delete" />
                </button>
                <button className="edit">
                    <img src={Edit} alt="edit" />
                </button>
            </div>
        </div>
    );
}

export default ToDo;