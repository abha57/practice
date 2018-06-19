import { combineReducers } from 'redux';
import { TodosReducer }  from './todos.reducer';
import { CountReducer }  from './count.reducer';

export const RootReducer = combineReducers({
    todos: TodosReducer,
    keepCount: CountReducer
});
