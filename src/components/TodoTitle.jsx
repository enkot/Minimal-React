import React from 'react';

const TodoTitle = ({todoCount}) => {
	return (
		<div>
			<h5>YOU HAVE {todoCount} TODOS</h5>
			<p>Type some text and press Enter. Click on todo to remove it</p>
		</div>
	);
};

export default TodoTitle;