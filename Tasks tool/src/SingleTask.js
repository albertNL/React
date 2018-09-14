import React, { Component } from "react";

const SingleTask = props => {
	return (
		<table>
			<tr>
				<td><li>{props.task}</li></td>
				<td><button onClick={props.delete}>Verwijder taak</button></td>
			</tr>
		</table>
	);
}

export default SingleTask;
