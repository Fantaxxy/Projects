var todos = [];

var input = prompt("What would you like to do?")



while(input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
    }
    // ASK FOR NEW SHIT
    input = prompt("What would you like to do?")
}
console.log("OK,YOU QUIT LIL HO");