import React from "react";
import Button from "./Button";

function CategoryFilter({ category, handleCategory, categoryClass }) {

	const renderButton = category.map(cat => {
		return (
			<Button
				key={cat}
				cat={cat}
				handleCategory={handleCategory}
				categoryClass={categoryClass}
			/>)
	})


	return (
		<div className="categories">
			<h5>Category filters</h5>
			{renderButton}
		</div>
	);
}

export default CategoryFilter;
