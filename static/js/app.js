angular.module('todoApp',[])
.controller('todoCtrl', function($scope){
	$scope.todoList = [{text:'Code Like Crazy',done:false}, {text:'Learn Angular',done:false}, {text:'Become Rich',done:false}];
	$scope.todoAdd = function(){
		$scope.todoList.push({text:$scope.newTodo,done:false});
		$scope.newTodo = "";

	}
	$scope.done = function(todo){
		tempTodo = $scope.todoList[$scope.todoList.indexOf(todo)];
		console.log(tempTodo.done);
		if(tempTodo.done == false)
			tempTodo.done = true;
		else(tempTodo.done == true)
			tempTodo.done = false;
		$scope.todoList[$scope.todoList.indexOf(todo)]=tempTodo;
		console.log(tempTodo);
	}
	$scope.removeDone= function(){
		var tempList = $scope.todoList.filter(function(todo){
			return !todo.done;
		});
		$scope.todoList = tempList;
	};
	$scope.removeTodo = function(todo){
		$scope.todoList.splice($scope.todoList.indexOf(todo),1);
	}
})