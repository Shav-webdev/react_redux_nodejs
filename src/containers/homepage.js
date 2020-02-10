import React, {useCallback, useEffect, useState} from "react";
import NewToDoField from "../components/newToDoInputFild/newToDoField";
import {Grid} from "@material-ui/core";
import ToDoList from "../components/toDoList/toDoList";
import ToDoItem from "../components/listItem/toDoItem";
import {AddButton} from "../components/iconButtons/iconButtons";
import {deleteData, getData, postData} from "./helpers";


export default function HomePage() {
    const [newToDo, setNewToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        getData().then(data => {
            console.log(data)
            setToDos(data)
        })

    }, []);

    const onAddBtnHandleClick = () => {
        setNewToDo("");
        if (newToDo.trim().length) {
            postData('/api/todos', {toDo: newToDo})
                .then(data => {
                    setToDos(data.toDos);
                })
                .catch(error => console.log(error.message));
        }

    };
    const handleEditBtnClick = () => {
        console.log(123)
    };

    const handleDeleteBtnClick = (id) => {
        fetch('/api/todos/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => setToDos(data))
            .catch(e => console.log(e))
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
                                          toDoId={el._id}
                                          handleEditBtnClick={handleEditBtnClick}
                                          handleDeleteBtnClick={handleDeleteBtnClick}
                                          handleSaveBtnClick={handleSaveBtnClick}>
                                    {el.title}
                                </ToDoItem>
                            )
                        })
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