import { combineReducers } from 'redux'
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './constants'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
    toDos: [
        {
            id: "11",
            title: "go to home"
        },
        {
            id: "14",
            title: "drink"
        }
    ]
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
        case ADD_TODO:
            return Object.assign({}, state.toDos, {
                id: 12,
                title: "eat something"
            });
        case REMOVE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });

        case UPDATE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}
const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp