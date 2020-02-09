import React from "react";
import {ListItem, ListItemSecondaryAction, ListItemText, makeStyles} from "@material-ui/core";
import {SaveToDoBtn, DeleteToDoBtn, EditToDoBtn} from "../iconButtons/iconButtons"

const useStyles = makeStyles({
    list: {
        position: "relative",
        marginTop: ".7rem",
        padding: ".8rem .4rem",
        backgroundColor: "#fff",
        borderRadius: 5
    },
});


export default function ToDoItem(props) {
    const classes = useStyles();
    const onEditBtnClick = () => {
        props.handleEditBtnClick()
    };
    const onDeleteBtnClick = () => {
        props.handleDeleteBtnClick()
    };

    return (
        <ListItem className={classes.list}>
            <ListItemText>
                {props.children}
            </ListItemText>
            {props.isList &&
                <ListItemSecondaryAction>
                    <EditToDoBtn onEditBtnClick={onEditBtnClick}/>
                    <DeleteToDoBtn onDeleteBtnClick={onDeleteBtnClick}/>
                </ListItemSecondaryAction>
            }

        </ListItem>
    )
}