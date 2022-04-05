import React from "react";
import "./App.css";

function App() {
    const [text, setText] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                { id: new Date().toISOString(), text, completed: false },
            ]);
        }
        setText("");
    };

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== todoId) return todo;

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            })
        );
    };
    return (
        <div className="App">
            <label>
                <input value={text} type="text" onChange={handleChange} />
                <button onClick={addTodo}>add</button>
            </label>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodoComplete(todo.id)}
                        />
                        <span>{todo.text}</span>
                        <span
                            className="delete"
                            onClick={() => removeTodo(todo.id)}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
