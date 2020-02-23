/*
 * action creators
 */

import {NEW_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, UPDATE_TODO, GET_TODOS, LOADING} from "./constants";

export function loading(bool) {
    return { type: LOADING, bool }
}

export function newTodo(todo) {
    return { type: NEW_TODO, todo }
}

export function getTodos(todo) {
    return { type: GET_TODOS, todo }
}

export function removeToDo(toDoId) {
    return { type: REMOVE_TODO, toDoId }
}

export function updateTodo(toDoId, title) {
    return { type: UPDATE_TODO, toDoId, title }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}