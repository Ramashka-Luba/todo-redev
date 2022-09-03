import s from "./ToDo.css";
import Delete from "./../../assets/delete.png";
import Edit from "./../../assets/edit.png";
import Done from "./../../assets/done.png";

const ToDo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id)); //создает новый список todos, без удаляемого todo
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item. completed
                };
            }
            return item;
        }))
    }

    return (
        <div className="innerItem">

            {/* <div className="checkbox">
                <input className="checkbox-input" type="checkbox" id="checkbox_1" />
                <lable className="hekbox-lable" for="checkbox_1">Done</lable>
            </div> */}

            <div className={`item ${todo.completed ? "completed": ""} `}>
                {text}
            </div>

            <div className="wrap">

                <button onClick={completeHandler} className="btn btn-done">
                    <img src={Done} alt="done" />
                </button>

                <button className="btn btn-edit">
                    <img src={Edit} alt="edit" />
                </button>

                <button onClick={deleteHandler} className="btn btn-delete">
                    <img src={Delete} alt="delete" />
                </button>


            </div>
        </div>
    );
}

export default ToDo;