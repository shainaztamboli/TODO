/**
 * Created by shainazt on 1/22/2015.
 */
angular.module("todoApp",[])
    .controller("MainCtrl", function($scope){
        $scope.todos=[];
        $scope.add = function(){
            $scope.todos.push($scope.newToDo);
            $scope.newToDo ={};
        };
        $scope.delete = function(item){
           var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 1);
        };
        $scope.clearCompleted = function(){
            for(var index=this.todos.length-1;index>=0;index--){
                if(this.todos[index].completed===true){
                    this.todos.splice(this.todos.indexOf(this.todos[index]),1);
                }
            }
        }
    });