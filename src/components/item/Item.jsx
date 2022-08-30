import s from "./Item.css";
import Delete from "./../../assets/delete.png"
import Edit from "./../../assets/edit.png"

const Item = () => {
    return (
        <div className="innerItem">
            <div className="item">
                To Do 1
            </div>
            <div className="wrap">
                <button className="delete">
                    <img src={Delete} alt="delete" />
                </button>
                <button className="edit">
                    <img src={Edit} alt="edit" />
                </button>
            </div>
        </div>
    );
}

export default Item;