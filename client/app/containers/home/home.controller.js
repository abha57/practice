import TodoActions from '../../actions/todo.actions';

class HomeController {
  constructor($ngRedux) {

    this.todo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  submitTodo(){
    this.keepAddCount();
    this.addTodo(this.todo);
    this.todo = '';
  }

  removeThis(index){
    this.keepRemoveCount();
    this.removeTodo(index);
  }

  $onDestroy(){
    this.unsubscribe();
  }

  mapStateToThis(state) {
      return {
          todos: state.todos,
          count: state.keepCount
      };
  }
}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
