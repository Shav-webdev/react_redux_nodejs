import React from "react";
import List from "@material-ui/core/List";

export default function ToDoList(props) {
    return (
        <List>
            {props.children}
        </List>
    )
}