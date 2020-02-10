import React, {useState} from "react";
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
    const [isShown, setIsShown] = useState(false);

    const onEditBtnClick = () => {
        props.handleEditBtnClick();
        setIsShown(true)

    };
    const onDeleteBtnClick = (id) => {
        props.handleDeleteBtnClick(id)
    };

    const classes = useStyles();
    return (
        <ListItem className={classes.list}>
            <ListItemText>
                {props.children}
            </ListItemText>
            {props.isList &&
                <ListItemSecondaryAction>
                    <EditToDoBtn onEditBtnClick={onEditBtnClick}/>
                    <DeleteToDoBtn
                        toDoId={props.toDoId}
                        onDeleteBtnClick={onDeleteBtnClick}/>
                </ListItemSecondaryAction>
            }
        </ListItem>
    )
}