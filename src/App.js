
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/ToDoList';
function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        filterHandler(todos);

    }, [todos, status]) //eslint-disable-line



    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }



    return (
        <div className="App">
            <header>
                <h1>MY TODO LIST</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
