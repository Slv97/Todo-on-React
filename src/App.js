import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import { addTodo } from "./store/todoSlice";

function App() {
    const [text, setText] = React.useState("");
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({ text }));
        setText("");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="App">
            <InputField
                handleChange={handleChange}
                addTodo={addTask}
                text={text}
            />

            <TodoList />
        </div>
    );
}

export default App;
