import { TODOS } from '../constants/todos';

const initialState = {
    addCount: 0,
    removeCount: 0
}

export function CountReducer(state = initialState, action) {
    switch(action.type) {
        case TODOS.KEEP_ADD_COUNT: 
            return angular.extend({}, state, state.addCount++);
        case TODOS.KEEP_REMOVE_COUNT: 
            return angular.extend({}, state, state.removeCount++);
        default:
            return state;
    }
}