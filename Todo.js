

let list = [];

while(true) {
    let input = prompt("What would you like to do?");
    // cteate a if condition to check the day and print it in console
    if (input === "new") {
        
        let task = prompt("Enter new todo");
        list.push(task);
        console.log(`${task} added to the list`);
    }

    if (input === "list") {
        console.log("**********");
        for(let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("**********");
    }

    if (input === "delete") {
        let index = prompt("Enter index of todo to delete");
        list.splice(index, 1);
        console.log("Todo removed");
    }

    if (input === "quit") {
        break;
    }
}