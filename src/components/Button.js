import React, { useState } from 'react'


function Button({ cat, handleCategory, categoryClass }) {

	const [isSelected, setIsSelected] = useState(false)
	const handleClick = (e) => {
		console.log(e.target.value)
		handleCategory(e.target.value)
		setIsSelected(!isSelected)
	}
	

	return (
		<button
			value={cat}
			className={!isSelected ? "" : "selected" }
			onClick={handleClick}
		>
			{cat}
		</button>
	)
}

export default Button