import React, { useState } from "react";
import './Todo.css'
function Todo() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function changeHandle(event) {
        const value = event.target.value;
        setInputText(value);
    }
    function handleClick() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={changeHandle} type="text" value={inputText} />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;