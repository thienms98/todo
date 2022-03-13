export function add(item){
    let todo = getTodo();
    // check 1st value (is falsy?)
    if(!todo[0]) todo[0]=item
    else todo.push(item);
    localStorage.setItem("todo", todo)
    return todo;
}

export function update(item, index){
    let todo = getTodo();
    todo[index] = item;
    localStorage.setItem("todo", todo)
    return todo;
}

export function remove(index){
    let todo = getTodo();
    todo.splice(index, 1);
    localStorage.setItem("todo", todo)
    return todo;
}

function getTodo(){
    return localStorage.getItem("todo").split(",")
}