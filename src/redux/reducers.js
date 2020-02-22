import { combineReducers } from 'redux'
import {
    GET_TODOS,
    NEW_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters, LOADING,
} from './constants'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
    loading: true,
    newToDo: "",
    toDos: []
};

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = initialState, action) {
    switch (action.type) {
        case NEW_TODO:
            return {
                ...state,
                newToDo: action.todo,
                loading: false,

            };
        case GET_TODOS:
            return {
                ...state,
                toDos: [...action.todo],
                loading: false,
            };
        case REMOVE_TODO:
            return {
                ...state,
                toDos: [...state.toDos.filter(el => el._id !== action.toDoId)],
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: action.bool,
            };
        // case UPDATE_TODO:
        //     return state;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp