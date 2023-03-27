// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

// event listner
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener("click", filterTodo)



//functions
function addTodo(event) {
    //prevent form from submit
    event.preventDefault();
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText =todoInput.value

    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check btn
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class ="fas fa-check"></>'
    completedButton.classList.add("Complete-btn")
    todoDiv.appendChild(completedButton)

     //trash btn
     const trashButton = document.createElement('button')
     trashButton.innerHTML = '<i class ="fas fa-trash"></>'
     trashButton.classList.add("trash-btn")
     todoDiv.appendChild(trashButton)

     //add to list
     todoList.appendChild(todoDiv)

     //clear box
     todoInput.value=""
}

function deleteCheck(e){
    const item = e.target

    //del todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        //animation

        todo.classList.add('fall')
       todo.addEventListener('transitioned', function(){
        todo.remove()
       })
    }

    //add todo item
    saveLocalTodos(todoInput.value)

    //check mark
    if(item.classList[0] ==="complete-btn"){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e){
const todos = todoList.childNodes
todos.foreEach(function(todo){
switch(e.target.value){
    case "all":
        todo.style.display = 'flex'
        break
    case "completed":
        if(todos.classList.contains('completed')){
            todo.style.display= 'flex'
        }else {
            todo.style.display= 'none'
        } 
        break
        case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display = "flex"
            } else {
                todo.style.display= 'none'
            }
            break

        }
    })
}

function saveLocalTodos(todo){
    //check if already have todo saved
    let todos
    if (localStorage.getItem('todos') === null){
        todos= []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify("todos"))
}

function getTodos(){
    let todos
    //check if already have todo saved
    if (localStorage.getItem('todos') === null){
        todos= []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.foreEach(function(todo){

        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
    
        const newTodo = document.createElement('li')
        newTodo.innerText =todo
    
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
    
        //check btn
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class ="fas fa-check"></>'
        completedButton.classList.add("Complete-btn")
        todoDiv.appendChild(completedButton)
    
         //trash btn
         const trashButton = document.createElement('button')
         trashButton.innerHTML = '<i class ="fas fa-trash"></>'
         trashButton.classList.add("trash-btn")
         todoDiv.appendChild(trashButton)
    
         //add to list
         todoList.appendChild(todoDiv)

    })

    
}