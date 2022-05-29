import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
	
	const [all, code, food, money, misc ] = categories

	const initialValue = { text: "", category : "", }

	const [formData, setFormData] = useState(initialValue)

	const handleChange = (e) => {
		const name = (e.target.name)
		const value = (e.target.value)
		setFormData(input => ({...input, [name]: value})) 
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onTaskFormSubmit(formData)
		setFormData(initialValue)
	}

	return (
		<form onSubmit={handleSubmit} className="new-task-form">
			<label>
				Details
				<input onChange={handleChange} type="text" name="text" value={formData.text} />
			</label>
			<label>
				Category
				<select onChange={handleChange} name="category" value={formData.category}>
					<option>Select</option>
					<option value={code}>{code}</option>
					<option value={food} >{food}</option>
					<option value={money}>{money}</option>
					<option value={misc}>{misc}</option>
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;
