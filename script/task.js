let tasks = []
// Array armazenador de tarefas 

const domTree = {
    ul: document.querySelector('#list-tasks') ,
    form: document.querySelector('form'),
    inputTasks: document.querySelector('#adder')
}
// Dom JS 

domTree.form.addEventListener('submit' , (e) => {
    e.preventDefault()

    let valueTask = domTree.inputTasks.value
    tasks.push(valueTask)

    if(valueTask === ''){
        alert('Set a valid tasks')
        tasks.pop()
    }
    
    tasks.forEach((item) => {
        console.log(item)
        
        console.log(tasks)
    })

    return
})

