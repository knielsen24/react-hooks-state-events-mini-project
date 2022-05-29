import React from "react";

function Task({ text, category, handleRemoveTask, index }) {
		
	const handleClick = () => handleRemoveTask(index)
	
	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
			<button onClick={handleClick} className="delete">X</button>
		</div>
	);
}

export default Task;
