import React from "react";

const InputField = ({ addTodo, handleChange, text }) => {
    return (
        <label>
            <input value={text} type="text" onChange={handleChange} />
            <button onClick={addTodo}>add</button>
        </label>
    );
};

export default InputField;
