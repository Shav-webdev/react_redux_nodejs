import React, {useCallback, useEffect, useState} from "react";
import NewToDoField from "../components/newToDoInputFild/newToDoField";
import {Grid} from "@material-ui/core";
import ToDoList from "../components/toDoList/toDoList";
import ToDoItem from "../components/listItem/toDoItem";
import {AddButton} from "../components/iconButtons/iconButtons";
import {getData, postData} from "./helpers";


export default function HomePage() {
    const [newToDo, setNewToDo] = useState("");
    const [updatedToDo, setUpdatedToDo] = useState("");
    const [toDos, setToDos] = useState([]);


    useEffect(() => {
        getData().then(data => setToDos(data))
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
    const handleDeleteBtnClick = (id) => {
        fetch('/api/todos/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => setToDos(data))
            .catch(e => console.log(e))
    };

    const handleSaveBtnClick = (id) => {
        const toDosUrl = `/api/todos/${id}`;
        const putMethod = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({_id: id, title: updatedToDo})
        };

        if (updatedToDo.trim().length) {
            fetch(toDosUrl, putMethod)
                .then(res => res.json())
                .then(data => setToDos(data))
                .catch(e => console.log(e))
        }


    };

    const onNewToDoFieldHandleChange = useCallback((v) => {
        setNewToDo(v);
    }, []);

    const updateToDoField = useCallback((v) => {
        setUpdatedToDo(v);
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
                                          onEditToDoFieldHandleChange={updateToDoField}
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