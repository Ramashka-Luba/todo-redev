import { useEffect, useRef } from "react";

import s from './InputEdit.module.css';




const InputEdit = ({ setText, text, onKeyDown }) => {
    const inputEl = useRef(null);

    // componentDidMount
    useEffect(() => { //фокус на enter
        inputEl.current.focus();
    }, []);

    return (
        <>
            <input className={s.inputEdit}
                ref={inputEl} 
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyDown = {onKeyDown}
            />
        </>
    )


}

export default InputEdit;