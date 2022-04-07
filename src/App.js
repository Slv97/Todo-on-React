import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import { addTodo } from "./store/todoSlice";
import { useTheme } from "./hooks/useTheme";

function App() {
    const [text, setText] = React.useState("");
    const dispatch = useDispatch();

    const { theme, setTheme } = useTheme();

    const addTask = () => {
        dispatch(addTodo({ text }));
        setText("");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleLightThemeClick = () => {
        setTheme("light");
    };

    const handleDarkThemeClick = () => {
        setTheme("dark");
    };

    return (
        <div className="container">
            <header className="header">Todo</header>

            <div className="themeWrap">
                <button className="light" onClick={handleLightThemeClick}>
                    light
                </button>
                <button className="dark" onClick={handleDarkThemeClick}>
                    dark
                </button>
            </div>

            <InputField
                handleChange={handleChange}
                addTodo={addTask}
                text={text}
            />

            <TodoList />

            <footer className="footer">Developed by Elena Savoshynskaya</footer>
        </div>
    );
}

export default App;
