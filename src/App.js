import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(storedTodos || []);
    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleAdd = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="container">
            <h1>Task Minder</h1>
            <div>
                <input type='text' value={input} placeholder='Add an Item' onChange={handleInput}/>
                <button id='add' onClick={handleAdd} className='add'>Add</button>
            </div>
            <div>
                {todos != null && todos.map((todo, index) => (
                <p className='todo' key={index}>
                    <button id='delete' onClick={() => handleDelete(index)}>Done</button>
                    <span>{todo}</span>
                </p>
                ))}
            </div>
        </div>
    );
}

export default App;
