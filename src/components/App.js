import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
	const [updateTasks, setUpdateTasks] = useState(TASKS)
	const [category, setCategory] = useState("All")

	const handleRemoveTask = (itemIndex) => {
		const removeTask = updateTasks.filter((task, index) => index !== itemIndex)
		setUpdateTasks(removeTask)
	}

	const onTaskFormSubmit = (newTask) => {
		const addTasks = [...updateTasks, newTask]
		setUpdateTasks(addTasks)
	}
	
	const handleCategory = (name) =>	setCategory(name)
	
	const filterTasks = updateTasks.filter(cat => {
		return (category === "All") ? cat : category === cat.category
	})

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				category={CATEGORIES}
				categoryClass={category}
				handleCategory={handleCategory}
			/>
			<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
			<TaskList
				updateTasks={filterTasks}
				handleRemoveTask={handleRemoveTask}
			/>
		</div>
	);
}

export default App;
