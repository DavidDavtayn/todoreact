import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Learn JS",
            isCopleted: false,
        },
        {
            id: Math.random(),
            text: "Learn CSS",
            isCopleted: false,
        },
        {
            id: Math.random(),
            text: "Learn React",
            isCopleted: false,
        },
    ]);

    return (
        <div className="app">
            <TodoForm
                onAdd={(text) => {
                    setTodos([
                        ...todos,
                        {
                            id: Math.random(),
                            text: text,
                            isCopleted: false,
                        },
                    ]);
                }}
            />
            <TodoList
                todos={todos}
                onDelete={(todo) => {
                    setTodos(todos.filter((t) => t.id !== todo.id));
                }}
                onChange={(newTodo) => {
                    setTodos(
                        todos.map((todo) => {
                            if (todo.id === newTodo.id) {
                                return newTodo;
                            }
                            return todo;
                        })
                    );
                }}
            />
            <TodoFooter
                todos={todos}
                onClearCopleted={() => {
                    setTodos(todos.filter((todo) => !todo.isCopleted));
                }}
            />
        </div>
    );
}

export default App;
