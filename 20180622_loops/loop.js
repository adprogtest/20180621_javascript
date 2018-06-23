var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javaScript",
	"eat healthy",
];


var todosLength = todos.length;
for (var i=0; i<todosLength; i++){
	console.log(todos[i]);
	todos.pop();
	console.log(todos[i]);
}



