var todos = ["Buy New Turtle Neck"];

var input = prompt("What would you like to do?")



while(input !== "quit") {
    if (input === "list") {
     listTodos();
    } else if (input === "new") {
     addTodos();
    }
     else if (input === "delete") {
     deleteTodos();
    }
    // ASK FOR NEW SHIT
    input = prompt("What would you like to do?")
}
   
console.log("OK,YOU QUIT LIL HO");

function listTodos() {
    console.log("***************")
    todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
    });
    console.log("***************") 
}

function addTodos() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
    console.log("added to do yerd")
        // ask for index of todo to be deleted
}

function deleteTodos() {
    // ask for todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice
    todos.splice(index, 1);
    console.log("That sh-- deleted bro")
}