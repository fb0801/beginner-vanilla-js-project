// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listner
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)


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

    //check mark
    if(item.classList[0] ==="complete-btn"){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}