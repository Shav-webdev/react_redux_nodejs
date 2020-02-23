import React, {useCallback, useEffect, useState} from "react";
import NewToDoField from "../components/newToDoInputFild/newToDoField";
import {Grid} from "@material-ui/core";
import ToDoList from "../components/toDoList/toDoList";
import ToDoItem from "../components/listItem/toDoItem";
import {AddButton} from "../components/iconButtons/iconButtons";
import {getData, postData} from "./helpers";
import {connect} from "react-redux";
import {getTodos, loading, newTodo, removeToDo, updateTodo} from "../redux/actions";
import Spinner from "../spiner/spinner";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import "./homepage.scss"

function HomePage(props) {
    const [updatedToDo, setUpdatedToDo] = useState("");

    useEffect(() => {
        getData().then(data => {
            props.getTodos(data);
        })
        // eslint-disable-next-line
    }, []);

    const onAddBtnHandleClick = () => {
        props.onLoading(true);
        if (props.toDos.newToDo.trim().length) {
            postData('/api/todos', {toDo: props.toDos.newToDo})
                .then(data => {
                    props.onNewToDo("");
                    props.getTodos(data.toDos);
                })
                .catch(error => console.log(error.message));
        }

    };
    const handleDeleteBtnClick = (id) => {
        props.onLoading(true);
        fetch('/api/todos/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => props.onRemove(id))
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
                .then(data => {
                    props.onUpdate(id, updatedToDo)
                    // setToDos(data)
                })
                .catch(e => console.log(e))
        }
    };

    const onNewToDoFieldHandleChange = useCallback((v) => {
        props.onNewToDo(v)
    }, [props]);

    const updateToDoField = useCallback((v) => {
        setUpdatedToDo(v);
    }, []);

    return (
        <>
            <Grid item xs={12}>
                <div>
                    <NewToDoField
                        newToDoValue={props.toDos.newToDo}
                        onNewToDoFieldHandleChange={onNewToDoFieldHandleChange}/>
                    <AddButton
                        onAddBtnHandleClick={onAddBtnHandleClick}/>
                </div>
            </Grid>
            <Grid item xs={12}>
                <TransitionGroup component={ToDoList}>
                    {(Array.isArray(props.toDos.toDos) && props.toDos.toDos.length > 0)
                        ?
                        props.toDos.toDos.map((el, index) => {
                            return (
                                <CSSTransition
                                    classNames={"todo"}
                                    key={index}
                                    timeout={800}>
                                    <ToDoItem
                                        isList={true}
                                        toDoId={el._id}
                                        onEditToDoFieldHandleChange={updateToDoField}
                                        handleDeleteBtnClick={handleDeleteBtnClick}
                                        handleSaveBtnClick={handleSaveBtnClick}>
                                        {el.title}
                                    </ToDoItem>
                                </CSSTransition>
                            )
                        })
                        :
                        <CSSTransition
                            timeout={750}>
                            <ToDoItem isList={false}>
                                No todos to show
                            </ToDoItem>
                        </CSSTransition>
                    }
                </TransitionGroup>
            </Grid>
            {props.toDos.loading && <Spinner/>}
        </>
    )
}

function mapStateToProps(state) {
    return {
        newTodo: state.newTodo,
        toDos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLoading: (bool) => {
            dispatch(loading(bool))
        },
        onNewToDo: (toDo) => {
            dispatch(newTodo(toDo))
        },
        getTodos: (toDo) => {
            dispatch(getTodos(toDo))
        },
        onRemove: (toDoId) => {
            dispatch(removeToDo(toDoId))
        },
        onUpdate: (toDoId, title) => {
            dispatch(updateTodo(toDoId, title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)