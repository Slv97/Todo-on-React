import React from "react";

const InputField = ({ addTodo, handleChange, text }) => {
    return (
        <>
            <label className="inputField">
                <input
                    value={text}
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter your task"
                />
            </label>
            <button className="btnAdd" onClick={addTodo}>
                add
            </button>
        </>
    );
};

export default InputField;
