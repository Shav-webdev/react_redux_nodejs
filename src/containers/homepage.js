import React, {useCallback, useEffect, useState} from "react";
import NewToDoField from "../components/newToDoInputFild/newToDoField";
import {Grid} from "@material-ui/core";
import ToDoList from "../components/toDoList/toDoList";
import ToDoItem from "../components/listItem/toDoItem";
import {AddButton} from "../components/iconButtons/iconButtons";
import {getData} from "./helpers";


export default function HomePage() {

    const [newToDo, setNewToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        getData().then(data => setToDos(data))
    }, []);

    const onAddBtnHandleClick = () => {
        console.log("21321546546");
    };
    const handleEditBtnClick = () => {
        console.log(123)
    };

    const handleDeleteBtnClick = () => {
        console.log(465)
    };

    const handleSaveBtnClick = () => {
        console.log(789)
    };

    const onNewToDoFieldHandleChange = useCallback((v) => {
        setNewToDo(v);
    }, []);

    return (
        <>
            <Grid item xs={12}>
                <div>
                    <NewToDoField
                        newToDoValue={newToDo}
                        onNewToDoFieldHandleChange={onNewToDoFieldHandleChange}/>
                    <AddButton
                        onAddBtnHandleClick={onAddBtnHandleClick}/>
                </div>
            </Grid>
            <Grid item xs={12}>
                <ToDoList>
                    {(Array.isArray(toDos) && toDos.length > 0)
                        ?
                        toDos.map((el, index) => {
                            return (
                                <ToDoItem key={index}
                                          isList={true}
                                          handleEditBtnClick={handleEditBtnClick}
                                          handleDeleteBtnClick={handleDeleteBtnClick}
                                          handleSaveBtnClick={handleSaveBtnClick}>
                                    {el.title}
                                </ToDoItem>
                            )})
                        :
                            <ToDoItem isList={false}>
                                No todos to show
                            </ToDoItem>
                        }

                </ToDoList>
            </Grid>
        </>
    )
}