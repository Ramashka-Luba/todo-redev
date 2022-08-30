import s from "./Input.css";

const Input = (props) => {
    return (
        <div className="innerInput">
            <input className="input"/>
            <button className="add">Add Todo</button>
        </div>
    );
}

export default Input;