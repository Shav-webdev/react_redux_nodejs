import React, {useState} from "react";
import {ListItem, ListItemSecondaryAction, ListItemText, makeStyles} from "@material-ui/core";
import {SaveToDoBtn, DeleteToDoBtn, EditToDoBtn, BackToToDoBtn} from "../iconButtons/iconButtons"
import UpdateToDoField from "../newToDoInputFild/updateToDoField";

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
    const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(true);

    const onEditBtnClick = (id) => {
        setIsShown(true);
        setIsSaveBtnDisabled(true);
    };

    const onDeleteBtnClick = (id) => {
        props.handleDeleteBtnClick(id)
    };

    const onSaveBtnClick = (id) => {
        props.handleSaveBtnClick(id);
        setIsShown(false);

    };

    const onBackBtnClick = () => {
        setIsShown(false);
    };

    const updateToDoHandleChange = (toDo) => {
        props.onEditToDoFieldHandleChange(toDo);
        if (toDo.trim().length) {
            setIsSaveBtnDisabled(false);
        } else {
            setIsSaveBtnDisabled(true);
        }

    };


    const classes = useStyles();
    return (
        <ListItem className={classes.list}>
            {!isShown
                ?
                <>
                    <ListItemText>
                        {props.children}
                    </ListItemText>
                    {props.isList &&
                    <ListItemSecondaryAction>
                        <EditToDoBtn onEditBtnClick={onEditBtnClick}/>
                        <DeleteToDoBtn
                            toDoId={props.toDoId}
                            onDeleteBtnClick={onDeleteBtnClick}/>
                    </ListItemSecondaryAction>}
                </>
                :
                <>
                    <UpdateToDoField onEditToDoFieldHandleChange={updateToDoHandleChange}/>
                    <ListItemSecondaryAction>
                        <BackToToDoBtn
                            onBackBtnClick={onBackBtnClick}/>
                        <SaveToDoBtn
                            isDisabled={isSaveBtnDisabled}
                            toDoId={props.toDoId}
                            onSaveBtnClick={() => onSaveBtnClick(props.toDoId)}/>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}