import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const Todo = (props) => {
	const [item, setItem] = useState(props.item);
	const deleteItem = props.deleteItem;

	const deleteEventHandler = () => {
		deleteItem(item);
	};

	return (
		<ListItem>
			<Checkbox checked={item.done} />
			<ListItemText>
				<InputBase 
					inputProps={{ "aria-label": "naked" }}
					type="text"
					id={item.id}
					name={item.id}
					value={item.title}
					multiline={true}
					fullWidth={true}
				/>
				<ListItemSecondaryAction>
					<IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
						<DeleteOutline />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItemText>
		</ListItem>
	);
};

export default Todo;