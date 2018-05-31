//EXPORT A STATELESS FUNCTIONAL COMPONENT
//DESCRIPTION, AMOUNT, CREATEAT
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>{amount} - {createdAt}</p>
	</div>
);

export default ExpenseListItem;