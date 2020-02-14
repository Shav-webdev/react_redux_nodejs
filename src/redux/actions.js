/*
 * action creators
 */

import {ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, UPDATE_TODO} from "./constants";

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function removeToDo(index) {
    return { type: REMOVE_TODO, index }
}

export function updateTodo(index) {
    return { type: UPDATE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}