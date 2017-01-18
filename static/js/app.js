angular.module('todoApp',[])
.controller('todoCtrl', function($scope){
	$scope.todoList = ['Code Like Crazy', 'Learn Angular', 'Become Rich']
	$scope.todoAdd = function(w){
		$scope.todoList.push($scope.newTodo);
		$scope.newTodo = "";

	};
	$scope.remove= function(todo){
		$scope.todoList.splice($scope.todoList.indexOf(todo),1);
	};
})