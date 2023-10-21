import React, { useState } from "react";
import { Media } from "reactstrap";

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddTodo = () => {
		if (inputValue.trim() !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	};

	const handleDeleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div className="container">
			<h1>Todo List</h1>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Input"
			/>
			<button onClick={handleAddTodo}>Add List</button>
			<ul >
				{todos.map((todo, index) => (
					<li className="list-style: none;" key={index}>
						{todo}
                        <div>
						<button className="btn btn-dark" onClick={() => handleDeleteTodo(index)}>
							Delete
						</button>
                        </div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;