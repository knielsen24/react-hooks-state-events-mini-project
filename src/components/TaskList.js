import React from "react";
import Task from "./Task";

function TaskList({ updateTasks, handleRemoveTask }) {
	
	const renderTasks = updateTasks.map((task, index) => (
		<Task
			key={task}
			index={index}
			{...task}
			handleRemoveTask={handleRemoveTask}
		/>)
	)

	return (
		<div className="tasks">
			{renderTasks}
		</div>
	);
}

export default TaskList;
