import React from "react";
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {IconButton} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function SaveToDoBtn(props) {
    const saveHandleClick = () => {
        props.onSaveBtnClick();
    };

    return (
        <IconButton
            onClick={() => saveHandleClick(props.toDoId)}
            edge="end"
            aria-label="save">
            <SaveIcon/>
        </IconButton>
    )

}

export function EditToDoBtn(props) {
    const editHandleClick = () => {
        props.onEditBtnClick();
    };

    return (
        <IconButton
            onClick={editHandleClick}
            edge="start"
            aria-label="edit">
            <EditIcon/>
        </IconButton>
    )

}

export function DeleteToDoBtn(props) {
    const deleteHandleClick = (id) => {
        props.onDeleteBtnClick(id);
    };

    return (
        <IconButton
            onClick={() => deleteHandleClick(props.toDoId)}
            edge="end"
            aria-label="delete">
            <DeleteIcon/>
        </IconButton>
    )
}


export function AddButton(props) {
    const onBtnHandleClick = () => {
        props.onAddBtnHandleClick();
    };

    return (
        <Button onClick={onBtnHandleClick}
                variant="contained"
                color="primary"
        >
            Add
            <AddIcon/>
        </Button>
    )
}