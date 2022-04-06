import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice"

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch()

    const handleClickRemove = () => dispatch(removeTodo({id}))
    const handleChangeToggle = () => dispatch(toggleTodoComplete({id}))
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChangeToggle}
            />
            <span>{text}</span>
            <span className="delete" onClick={handleClickRemove}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
