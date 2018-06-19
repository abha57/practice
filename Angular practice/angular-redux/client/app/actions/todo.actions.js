import { TODOS } from '../constants/todos';

function addTodo(todo){
    return {
        type: TODOS.ADD_TODO,
        payload: todo
    }
}

function removeTodo(index){
    return {
        type: TODOS.REMOVE_TODO,
        payload: index
    };
}
	
function keepAddCount(){
	return {
        type: TODOS.KEEP_ADD_COUNT
    };
}

function keepRemoveCount(){
	return {
        type: TODOS.KEEP_REMOVE_COUNT
    };
}
export default { addTodo, removeTodo, keepAddCount, keepRemoveCount };
