import template from './home.html';

controllerFn.$inject = ["$ngRedux"];
function controllerFn($ngRedux){
	constructor($ngRedux) {
	    this.todo = '';
	    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  	}

	mapStateToThis(state) {
	    return {
	        todos: state.todos
	    };
	}
};
const goatsListComponent = {
  restrict: 'E',
  bindings: {
    goats: '<'
  },
  template,
  controller: controllerFn,
  controllerAs: 'vm'
};

export default goatsListComponent;