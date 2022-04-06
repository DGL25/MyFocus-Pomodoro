class MyTask{
    constructor(task){
        this.mytask = task
        this.complete = false
    }
}

let pomoTasks = {newTasks: [],allTasks: [],trashTasks: []}

let {newTasks,allTasks,trashTasks} = pomoTasks

function addNewTask(){
    let liItemAddTask = crEl('li')
    liItemAddTask.className = 'item-add-task'
    liItemAddTask.id = `item-add-task-${newTasks.length}`

    let inputNewTask = crEl('input')
    inputNewTask.setAttribute('type', 'text')
    inputNewTask.setAttribute('name', `new-task-${newTasks.length}`)
    inputNewTask.setAttribute('placeholder', `Try 'search about egypt'`)
    inputNewTask.setAttribute('autocomplete', 'off')
    inputNewTask.setAttribute('autofocus', 'on')
    inputNewTask.id = `new-task-${newTasks.length}`
    inputNewTask.className = `new-add-task`

    let ulAddCet = crEl('ul')
    ulAddCet.id = `add-cet-${newTasks.length}`
    ulAddCet.className = `add-cet`

    let liItemCet = crEl('li')
    liItemCet.id = `item-cet-${newTasks.length}`
    liItemCet.className = `item-cet`

    let buttonBtnConTask = crEl('button')
    buttonBtnConTask.className = `btn-con-task`
    buttonBtnConTask.setAttribute('onClick', `newTask(${newTasks.length})`)

    liItemCet.appendChild(buttonBtnConTask)

    ulAddCet.appendChild(liItemCet)

    liItemAddTask.appendChild(inputNewTask)
    liItemAddTask.appendChild(ulAddCet)

    elSel('#add-task-list').appendChild(liItemAddTask)

    elSel('#add-task').disabled = true
}

function newTask(param){
    if(elSel(`#new-task-${param}`).value.length < 5){
        console.log('Descrição com menos de 5 caracters')
    }else{
        newTasks.push(elSel(`#new-task-${param}`).value)
        elSel(`#new-task-${param}`).disabled = true
        elSel(`#new-task-${param}`).style.borderColor = 'rgba(0,0,0,.05)'

        elSel(`#add-cet-${param}`).removeChild(elSel(`#item-cet-${param}`))

        let liItemCetEdit = crEl('li')
        liItemCetEdit.id = `item-cet-edit-${param}`
        liItemCetEdit.className = `item-cet`

        let buttonBtnEditTask = crEl('button')
        buttonBtnEditTask.className = `btn-edit-task`
        buttonBtnEditTask.setAttribute('onClick', `newTaskFunctions('edit', ${param})`)

        liItemCetEdit.appendChild(buttonBtnEditTask)

        elSel(`#add-cet-${param}`).appendChild(liItemCetEdit)

        let liItemCetTrash = crEl('li')
        liItemCetTrash.id = `item-cet-trash-${param}`
        liItemCetTrash.className = `item-cet`

        let buttonBtnTrashTask = crEl('button')
        buttonBtnTrashTask.className = `btn-trash-task`
        buttonBtnTrashTask.setAttribute('onClick', `newTaskFunctions('trash', ${param})`)

        liItemCetTrash.appendChild(buttonBtnTrashTask)

        elSel(`#add-cet-${param}`).appendChild(liItemCetTrash)

        elSel('#add-task').disabled = false

        console.log(newTasks)
    }
}

function newTaskFunctions(param,index){
    switch(param){
        case 'edit':
            console.log('Edit task')
            elSel(`#new-task-${index}`).disabled = false
            elSel(`#new-task-${index}`).style.borderColor = 'rgba(0,0,0,.5)'

            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-edit-${index}`))
            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-trash-${index}`))

            let liItemCetSaveEdit = crEl('li')
            liItemCetSaveEdit.id = `item-cet-save-edit-${index}`
            liItemCetSaveEdit.className = `item-cet`

            let buttonBtnSaveEditTask = crEl('button')
            buttonBtnSaveEditTask.className = `btn-save-edit-task`
            buttonBtnSaveEditTask.setAttribute('onClick', `newTaskFunctions('saveEdit', ${index})`)

            liItemCetSaveEdit.appendChild(buttonBtnSaveEditTask)

            elSel(`#add-cet-${index}`).appendChild(liItemCetSaveEdit)

            let liItemCetCancelEdit = crEl('li')
            liItemCetCancelEdit.id = `item-cet-cancel-edit-${index}`
            liItemCetCancelEdit.className = `item-cet`

            let buttonBtnCancelEditTask = crEl('button')
            buttonBtnCancelEditTask.className = `btn-cancel-edit-task`
            buttonBtnCancelEditTask.setAttribute('onClick', `newTaskFunctions('cancel', ${index})`)

            liItemCetCancelEdit.appendChild(buttonBtnCancelEditTask)

            elSel(`#add-cet-${index}`).appendChild(liItemCetCancelEdit)
        break;

        case 'trash':
            console.log('Trash task')

            elSel('#add-task-list').removeChild(elSel(`#item-add-task-${index}`))

            newTasks.splice(index, 1)

            if(newTasks.length > 0){
                elSel('#content-add-task-list').removeChild(elSel('#add-task-list'))

                let ulAddTaskList = crEl('ul')
                ulAddTaskList.id = 'add-task-list'

                elSel('#content-add-task-list').appendChild(ulAddTaskList)

                newTasks.forEach((task,index) => {
                    let liItemAddTask = crEl('li')
                    liItemAddTask.className = 'item-add-task'
                    liItemAddTask.id = `item-add-task-${index}`

                    let inputNewTask = crEl('input')
                    inputNewTask.setAttribute('type', 'text')
                    inputNewTask.setAttribute('name', `new-task-${index}`)
                    inputNewTask.setAttribute('placeholder', `Try 'search about egypt'`)
                    inputNewTask.setAttribute('value', `${newTasks[index]}`)
                    inputNewTask.setAttribute('autocomplete', 'off')
                    inputNewTask.setAttribute('autofocus', 'on')
                    inputNewTask.id = `new-task-${index}`
                    inputNewTask.className = `new-add-task`
                    inputNewTask.disabled = true
                    inputNewTask.style.borderColor = 'rgba(0,0,0,.05)'

                    let ulAddCet = crEl('ul')
                    ulAddCet.id = `add-cet-${index}`
                    ulAddCet.className = `add-cet`
                    
                    liItemAddTask.appendChild(inputNewTask)
                    liItemAddTask.appendChild(ulAddCet)

                    let liItemCetEdit = crEl('li')
                    liItemCetEdit.id = `item-cet-edit-${index}`
                    liItemCetEdit.className = `item-cet`

                    let buttonBtnEditTask = crEl('button')
                    buttonBtnEditTask.className = `btn-edit-task`
                    buttonBtnEditTask.setAttribute('onClick', `newTaskFunctions('edit', ${index})`)

                    liItemCetEdit.appendChild(buttonBtnEditTask)

                    ulAddCet.appendChild(liItemCetEdit)

                    let liItemCetTrash = crEl('li')
                    liItemCetTrash.id = `item-cet-trash-${index}`
                    liItemCetTrash.className = `item-cet`

                    let buttonBtnTrashTask = crEl('button')
                    buttonBtnTrashTask.className = `btn-trash-task`
                    buttonBtnTrashTask.setAttribute('onClick', `newTaskFunctions('trash', ${index})`)

                    liItemCetTrash.appendChild(buttonBtnTrashTask)

                    ulAddCet.appendChild(liItemCetTrash)

                    ulAddTaskList.appendChild(liItemAddTask)
                });
            }
        
        break;

        case 'saveEdit':
            console.log('Save Edit Task')
            elSel(`#new-task-${index}`).disabled = true
            elSel(`#new-task-${index}`).style.borderColor = 'rgba(0,0,0,.05)'

            newTasks[index] = elSel(`#new-task-${index}`).value

            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-save-edit-${index}`))
            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-cancel-edit-${index}`))

            let liItemCetEdit = crEl('li')
            liItemCetEdit.id = `item-cet-edit-${index}`
            liItemCetEdit.className = `item-cet`

            let buttonBtnEditTask = crEl('button')
            buttonBtnEditTask.className = `btn-edit-task`
            buttonBtnEditTask.setAttribute('onClick', `newTaskFunctions('edit', ${index})`)

            liItemCetEdit.appendChild(buttonBtnEditTask)

            elSel(`#add-cet-${index}`).appendChild(liItemCetEdit)

            let liItemCetTrash = crEl('li')
            liItemCetTrash.id = `item-cet-trash-${index}`
            liItemCetTrash.className = `item-cet`

            let buttonBtnTrashTask = crEl('button')
            buttonBtnTrashTask.className = `btn-trash-task`
            buttonBtnTrashTask.setAttribute('onClick', `newTaskFunctions('trash', ${index})`)

            liItemCetTrash.appendChild(buttonBtnTrashTask)

            elSel(`#add-cet-${index}`).appendChild(liItemCetTrash)
        break;

        default:
            console.log('Cancel edit Task')
            elSel(`#new-task-${index}`).disabled = true
            elSel(`#new-task-${index}`).style.borderColor = 'rgba(0,0,0,.05)'

            elSel(`#new-task-${index}`).value = newTasks[index]

            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-save-edit-${index}`))
            elSel(`#add-cet-${index}`).removeChild(elSel(`#item-cet-cancel-edit-${index}`))

            let liItemCetEditC = crEl('li')
            liItemCetEditC.id = `item-cet-edit-${index}`
            liItemCetEditC.className = `item-cet`

            let buttonBtnEditTaskC = crEl('button')
            buttonBtnEditTaskC.className = `btn-edit-task`
            buttonBtnEditTaskC.setAttribute('onClick', `newTaskFunctions('edit', ${index})`)

            liItemCetEditC.appendChild(buttonBtnEditTaskC)

            elSel(`#add-cet-${index}`).appendChild(liItemCetEditC)

            let liItemCetTrashC = crEl('li')
            liItemCetTrashC.id = `item-cet-trash-${index}`
            liItemCetTrashC.className = `item-cet`

            let buttonBtnTrashTaskC = crEl('button')
            buttonBtnTrashTaskC.className = `btn-trash-task`
            buttonBtnTrashTaskC.setAttribute('onClick', `newTaskFunctions('trash', ${index})`)

            liItemCetTrashC.appendChild(buttonBtnTrashTaskC)

            elSel(`#add-cet-${index}`).appendChild(liItemCetTrashC)
        break;
    }
    console.log(newTasks)
}

function addTask(){
    if(newTasks.length > 0){
        newTasks.forEach((task, index) => {
            let newTask = new MyTask(newTasks[index])
            allTasks.push(newTask)
        });
        newTasks = []
        console.log(allTasks)
        console.log(newTasks)
    }
}

function tasksView(param){
    elSel('#btn-all-task-list').classList.remove('borderColor')
    elSel('#btn-complete-list').classList.remove('borderColor')
    elSel('#btn-incomplete-list').classList.remove('borderColor')
    elSel('#btn-trash-list').classList.remove('borderColor')

    switch (param) {
        case 'allTasks':
            console.log('all tasks')

            elSel('#btn-all-task-list').classList.add('borderColor')
            
            let ulListTasks = crEl('ul')
            ulListTasks.id = 'list-tasks'
            
            elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
            elSel('#content-tasks-list').appendChild(ulListTasks)
            
            if(allTasks.length > 0){
                    elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
                    
                    allTasks.forEach((task, index) => {
                    let liItemListTask = crEl('li')
                    liItemListTask.id = `task-${index}`
                    liItemListTask.className = `item-list-task`

                    let inputTaskDesc = crEl('input')
                    inputTaskDesc.setAttribute('type', 'text')
                    inputTaskDesc.setAttribute('name', `task-desc-${index}`)
                    inputTaskDesc.id = `task-desc-${index}`
                    inputTaskDesc.value = `${task.mytask}`
                    inputTaskDesc.disabled = true

                    let ulTaskCet = crEl('ul')
                    ulTaskCet.id = `task-cet-${index}`
                    ulTaskCet.className = `task-cet`

                    let liBtnCheck = crEl('li')
                    liBtnCheck.id = `btn-check-${index}`
                    liBtnCheck.className = `item-cet`
                    
                    let inputBtnCheck = crEl('input')
                    inputBtnCheck.setAttribute('type', 'checkbox')
                    inputBtnCheck.setAttribute('name', 'check-task')
                    inputBtnCheck.addEventListener('click', () => {task.complete === false ? task.complete = true : task.complete = false})
                    inputBtnCheck.id = `check-task-${index}`
                    inputBtnCheck.className = `btn-cet`
                    
                    if(task.complete === true){inputBtnCheck.checked = true}

                    liBtnCheck.appendChild(inputBtnCheck)
                    
                    let liBtnEdit = crEl('li')
                    liBtnEdit.id = `btn-edit-${index}`
                    liBtnEdit.className = `item-cet`

                    let buttonBtnEdit = crEl('button')
                    buttonBtnEdit.addEventListener('click', () => {
                        inputTaskDesc.disabled = false
                        inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)'

                        liBtnCheck.style.display = 'none'
                        liBtnEdit.style.display = 'none'
                        liBtnTrash.style.display = 'none'

                        liBtnSaveEdit.style.display = 'flex'
                        liBtnCancelEdit.style.display = 'flex'
                    })
                    buttonBtnEdit.id = `edit-task-${index}`
                    buttonBtnEdit.className = `btn-cet`

                    liBtnEdit.appendChild(buttonBtnEdit)
                    
                    let liBtnTrash = crEl('li')
                    liBtnTrash.id = `btn-trash-${index}`
                    liBtnTrash.className = `item-cet`
                    
                    let buttonBtnTrash = crEl('button')
                    buttonBtnTrash.addEventListener('click', () => {
                        trashTasks.push(allTasks[index])
                        allTasks.splice(index, 1)

                        ulListTasks.removeChild(elSel(`#task-${index}`))
                        tasksView('allTasks')
                        console.log(allTasks, trashTasks)
                    })
                    buttonBtnTrash.id = `trash-task-${index}`
                    buttonBtnTrash.className = `btn-cet`
                    
                    liBtnTrash.appendChild(buttonBtnTrash)
                 
                    let liBtnSaveEdit = crEl('li')
                    liBtnSaveEdit.id = `btn-save-edit-${index}`
                    liBtnSaveEdit.className = `item-cet`
                    liBtnSaveEdit.style.display = `none`
                                        
                    let buttonBtnSaveEdit = crEl('button')
                    buttonBtnSaveEdit.addEventListener('click', ()=>{
                        task.mytask = inputTaskDesc.value
                        inputTaskDesc.disabled = true
                        inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                        liBtnCheck.style.display = 'flex'
                        liBtnEdit.style.display = 'flex'
                        liBtnTrash.style.display = 'flex'

                        liBtnSaveEdit.style.display = 'none'
                        liBtnCancelEdit.style.display = 'none'
                    })
                    buttonBtnSaveEdit.id = `save-edit-task-${index}`
                    buttonBtnSaveEdit.className = `btn-cet`

                    liBtnSaveEdit.appendChild(buttonBtnSaveEdit)

                    let liBtnCancelEdit = crEl('li')
                    liBtnCancelEdit.id = `btn-cancel-edit-${index}`
                    liBtnCancelEdit.className = `item-cet`
                    liBtnCancelEdit.style.display = `none`
                    
                    let buttonBtnCancelEdit = crEl('button')
                    buttonBtnCancelEdit.addEventListener('click', ()=>{
                        inputTaskDesc.value = task.mytask
                        inputTaskDesc.disabled = true
                        inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                        liBtnCheck.style.display = 'flex'
                        liBtnEdit.style.display = 'flex'
                        liBtnTrash.style.display = 'flex'

                        liBtnSaveEdit.style.display = 'none'
                        liBtnCancelEdit.style.display = 'none'
                    })
                    buttonBtnCancelEdit.id = `cancel-edit-task-${index}`
                    buttonBtnCancelEdit.className = `btn-cet`

                    liBtnCancelEdit.appendChild(buttonBtnCancelEdit)

                    ulTaskCet.appendChild(liBtnCheck)
                    ulTaskCet.appendChild(liBtnEdit)
                    ulTaskCet.appendChild(liBtnTrash)
                    ulTaskCet.appendChild(liBtnSaveEdit)
                    ulTaskCet.appendChild(liBtnCancelEdit)

                    liItemListTask.appendChild(inputTaskDesc)
                    liItemListTask.appendChild(ulTaskCet)
                    
                    ulListTasks.appendChild(liItemListTask)

                    elSel('#content-tasks-list').appendChild(ulListTasks)
                });
            }
        break;

        case 'complete':
            console.log('Complete Tasks')

            elSel('#btn-complete-list').classList.add('borderColor')

            let ulListTasksCom = crEl('ul')
            ulListTasksCom.id = 'list-tasks'
            
            elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
            elSel('#content-tasks-list').appendChild(ulListTasksCom)

            if(allTasks.length > 0){
                allTasks.forEach((task, index)=>{
                    if(task.complete === true){
                        let liItemListTask = crEl('li')
                        liItemListTask.id = `task-${index}`
                        liItemListTask.className = `item-list-task`

                        let inputTaskDesc = crEl('input')
                        inputTaskDesc.setAttribute('type', 'text')
                        inputTaskDesc.setAttribute('name', `task-desc-${index}`)
                        inputTaskDesc.id = `task-desc-${index}`
                        inputTaskDesc.value = `${task.mytask}`
                        inputTaskDesc.disabled = true

                        let ulTaskCet = crEl('ul')
                        ulTaskCet.id = `task-cet-${index}`
                        ulTaskCet.className = `task-cet`

                        let liBtnCheck = crEl('li')
                        liBtnCheck.id = `btn-check-${index}`
                        liBtnCheck.className = `item-cet`
                        
                        let inputBtnCheck = crEl('input')
                        inputBtnCheck.setAttribute('type', 'checkbox')
                        inputBtnCheck.setAttribute('name', 'check-task')
                        inputBtnCheck.addEventListener('click', () => {task.complete === false ? task.complete = true : task.complete = false})
                        inputBtnCheck.id = `check-task-${index}`
                        inputBtnCheck.className = `btn-cet`
                        
                        if(task.complete === true){inputBtnCheck.checked = true}

                        liBtnCheck.appendChild(inputBtnCheck)
                        
                        let liBtnEdit = crEl('li')
                        liBtnEdit.id = `btn-edit-${index}`
                        liBtnEdit.className = `item-cet`

                        let buttonBtnEdit = crEl('button')
                        buttonBtnEdit.addEventListener('click', () => {
                            inputTaskDesc.disabled = false
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)'

                            liBtnCheck.style.display = 'none'
                            liBtnEdit.style.display = 'none'
                            liBtnTrash.style.display = 'none'

                            liBtnSaveEdit.style.display = 'flex'
                            liBtnCancelEdit.style.display = 'flex'
                        })
                        buttonBtnEdit.id = `edit-task-${index}`
                        buttonBtnEdit.className = `btn-cet`

                        liBtnEdit.appendChild(buttonBtnEdit)
                        
                        let liBtnTrash = crEl('li')
                        liBtnTrash.id = `btn-trash-${index}`
                        liBtnTrash.className = `item-cet`
                        
                        let buttonBtnTrash = crEl('button')
                        buttonBtnTrash.addEventListener('click', () => {
                            trashTasks.push(allTasks[index])
                            allTasks.splice(index, 1)

                            ulListTasksCom.removeChild(elSel(`#task-${index}`))
                            tasksView('complete')
                            console.log(allTasks, trashTasks)
                        })
                        buttonBtnTrash.id = `trash-task-${index}`
                        buttonBtnTrash.className = `btn-cet`
                        
                        liBtnTrash.appendChild(buttonBtnTrash)
                    
                        let liBtnSaveEdit = crEl('li')
                        liBtnSaveEdit.id = `btn-save-edit-${index}`
                        liBtnSaveEdit.className = `item-cet`
                        liBtnSaveEdit.style.display = `none`
                                            
                        let buttonBtnSaveEdit = crEl('button')
                        buttonBtnSaveEdit.addEventListener('click', ()=>{
                            task.mytask = inputTaskDesc.value
                            inputTaskDesc.disabled = true
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                            liBtnCheck.style.display = 'flex'
                            liBtnEdit.style.display = 'flex'
                            liBtnTrash.style.display = 'flex'

                            liBtnSaveEdit.style.display = 'none'
                            liBtnCancelEdit.style.display = 'none'
                        })
                        buttonBtnSaveEdit.id = `save-edit-task-${index}`
                        buttonBtnSaveEdit.className = `btn-cet`

                        liBtnSaveEdit.appendChild(buttonBtnSaveEdit)

                        let liBtnCancelEdit = crEl('li')
                        liBtnCancelEdit.id = `btn-cancel-edit-${index}`
                        liBtnCancelEdit.className = `item-cet`
                        liBtnCancelEdit.style.display = `none`
                        
                        let buttonBtnCancelEdit = crEl('button')
                        buttonBtnCancelEdit.addEventListener('click', ()=>{
                            inputTaskDesc.value = task.mytask
                            inputTaskDesc.disabled = true
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                            liBtnCheck.style.display = 'flex'
                            liBtnEdit.style.display = 'flex'
                            liBtnTrash.style.display = 'flex'

                            liBtnSaveEdit.style.display = 'none'
                            liBtnCancelEdit.style.display = 'none'
                        })
                        buttonBtnCancelEdit.id = `cancel-edit-task-${index}`
                        buttonBtnCancelEdit.className = `btn-cet`

                        liBtnCancelEdit.appendChild(buttonBtnCancelEdit)

                        ulTaskCet.appendChild(liBtnCheck)
                        ulTaskCet.appendChild(liBtnEdit)
                        ulTaskCet.appendChild(liBtnTrash)
                        ulTaskCet.appendChild(liBtnSaveEdit)
                        ulTaskCet.appendChild(liBtnCancelEdit)

                        liItemListTask.appendChild(inputTaskDesc)
                        liItemListTask.appendChild(ulTaskCet)
                        
                        ulListTasksCom.appendChild(liItemListTask)

                        elSel('#content-tasks-list').appendChild(ulListTasksCom)
                    }
                })
            }
        break;
        
        case 'incomplete':
            console.log('Incomplete Tasks')

            elSel('#btn-incomplete-list').classList.add('borderColor')

            let ulListTasksIn = crEl('ul')
            ulListTasksIn.id = 'list-tasks'
            
            elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
            elSel('#content-tasks-list').appendChild(ulListTasksIn)

            if(allTasks.length > 0){
                allTasks.forEach((task, index)=>{
                    if(task.complete === false){
                        let liItemListTask = crEl('li')
                        liItemListTask.id = `task-${index}`
                        liItemListTask.className = `item-list-task`

                        let inputTaskDesc = crEl('input')
                        inputTaskDesc.setAttribute('type', 'text')
                        inputTaskDesc.setAttribute('name', `task-desc-${index}`)
                        inputTaskDesc.id = `task-desc-${index}`
                        inputTaskDesc.value = `${task.mytask}`
                        inputTaskDesc.disabled = true

                        let ulTaskCet = crEl('ul')
                        ulTaskCet.id = `task-cet-${index}`
                        ulTaskCet.className = `task-cet`

                        let liBtnCheck = crEl('li')
                        liBtnCheck.id = `btn-check-${index}`
                        liBtnCheck.className = `item-cet`
                        
                        let inputBtnCheck = crEl('input')
                        inputBtnCheck.setAttribute('type', 'checkbox')
                        inputBtnCheck.setAttribute('name', 'check-task')
                        inputBtnCheck.addEventListener('click', () => {task.complete === false ? task.complete = true : task.complete = false})
                        inputBtnCheck.id = `check-task-${index}`
                        inputBtnCheck.className = `btn-cet`
                        
                        if(task.complete === true){inputBtnCheck.checked = true}

                        liBtnCheck.appendChild(inputBtnCheck)
                        
                        let liBtnEdit = crEl('li')
                        liBtnEdit.id = `btn-edit-${index}`
                        liBtnEdit.className = `item-cet`

                        let buttonBtnEdit = crEl('button')
                        buttonBtnEdit.addEventListener('click', () => {
                            inputTaskDesc.disabled = false
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)'

                            liBtnCheck.style.display = 'none'
                            liBtnEdit.style.display = 'none'
                            liBtnTrash.style.display = 'none'

                            liBtnSaveEdit.style.display = 'flex'
                            liBtnCancelEdit.style.display = 'flex'
                        })
                        buttonBtnEdit.id = `edit-task-${index}`
                        buttonBtnEdit.className = `btn-cet`

                        liBtnEdit.appendChild(buttonBtnEdit)
                        
                        let liBtnTrash = crEl('li')
                        liBtnTrash.id = `btn-trash-${index}`
                        liBtnTrash.className = `item-cet`
                        
                        let buttonBtnTrash = crEl('button')
                        buttonBtnTrash.addEventListener('click', () => {
                            trashTasks.push(allTasks[index])
                            allTasks.splice(index, 1)

                            ulListTasksIn.removeChild(elSel(`#task-${index}`))
                            tasksView('incomplete')
                            console.log(allTasks, trashTasks)
                        })
                        buttonBtnTrash.id = `trash-task-${index}`
                        buttonBtnTrash.className = `btn-cet`
                        
                        liBtnTrash.appendChild(buttonBtnTrash)
                    
                        let liBtnSaveEdit = crEl('li')
                        liBtnSaveEdit.id = `btn-save-edit-${index}`
                        liBtnSaveEdit.className = `item-cet`
                        liBtnSaveEdit.style.display = `none`
                                            
                        let buttonBtnSaveEdit = crEl('button')
                        buttonBtnSaveEdit.addEventListener('click', ()=>{
                            task.mytask = inputTaskDesc.value
                            inputTaskDesc.disabled = true
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                            liBtnCheck.style.display = 'flex'
                            liBtnEdit.style.display = 'flex'
                            liBtnTrash.style.display = 'flex'

                            liBtnSaveEdit.style.display = 'none'
                            liBtnCancelEdit.style.display = 'none'
                        })
                        buttonBtnSaveEdit.id = `save-edit-task-${index}`
                        buttonBtnSaveEdit.className = `btn-cet`

                        liBtnSaveEdit.appendChild(buttonBtnSaveEdit)

                        let liBtnCancelEdit = crEl('li')
                        liBtnCancelEdit.id = `btn-cancel-edit-${index}`
                        liBtnCancelEdit.className = `item-cet`
                        liBtnCancelEdit.style.display = `none`
                        
                        let buttonBtnCancelEdit = crEl('button')
                        buttonBtnCancelEdit.addEventListener('click', ()=>{
                            inputTaskDesc.value = task.mytask
                            inputTaskDesc.disabled = true
                            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)'

                            liBtnCheck.style.display = 'flex'
                            liBtnEdit.style.display = 'flex'
                            liBtnTrash.style.display = 'flex'

                            liBtnSaveEdit.style.display = 'none'
                            liBtnCancelEdit.style.display = 'none'
                        })
                        buttonBtnCancelEdit.id = `cancel-edit-task-${index}`
                        buttonBtnCancelEdit.className = `btn-cet`

                        liBtnCancelEdit.appendChild(buttonBtnCancelEdit)

                        ulTaskCet.appendChild(liBtnCheck)
                        ulTaskCet.appendChild(liBtnEdit)
                        ulTaskCet.appendChild(liBtnTrash)
                        ulTaskCet.appendChild(liBtnSaveEdit)
                        ulTaskCet.appendChild(liBtnCancelEdit)

                        liItemListTask.appendChild(inputTaskDesc)
                        liItemListTask.appendChild(ulTaskCet)
                        
                        ulListTasksIn.appendChild(liItemListTask)

                        elSel('#content-tasks-list').appendChild(ulListTasksIn)
                    }
                })
            }
        break;

        case 'trash':
            console.log('Trash Tasks')

            elSel('#btn-trash-list').classList.add('borderColor')

            let ulListTasksTrash = crEl('ul')
            ulListTasksTrash.id = 'list-tasks'
            
            elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
            elSel('#content-tasks-list').appendChild(ulListTasksTrash)

            if(trashTasks.length > 0){
                elSel('#content-tasks-list').removeChild(elSel('#list-tasks'))
                    
                trashTasks.forEach((task, index) => {
                let liItemListTask = crEl('li')
                liItemListTask.id = `task-${index}`
                liItemListTask.className = `item-list-task`

                let inputTaskDesc = crEl('input')
                inputTaskDesc.setAttribute('type', 'text')
                inputTaskDesc.setAttribute('name', `task-desc-${index}`)
                inputTaskDesc.id = `task-desc-${index}`
                inputTaskDesc.value = `${task.mytask}`
                inputTaskDesc.disabled = true

                let ulTaskCet = crEl('ul')
                ulTaskCet.id = `task-cet-${index}`
                ulTaskCet.className = `task-cet`

                let liBtnRestore = crEl('li')
                liBtnRestore.id = `btn-restore-${index}`
                liBtnRestore.className = `item-cet btn-restore`
                
                let buttonBtnRestore = crEl('button')
                buttonBtnRestore.addEventListener('click', () => {
                    allTasks.push(trashTasks[index])
                    trashTasks.splice(index, 1)

                    ulListTasksTrash.removeChild(elSel(`#task-${index}`))
                    tasksView('trash')
                    console.log(allTasks, trashTasks)
                })
                buttonBtnRestore.id = `restore-task-${index}`
                buttonBtnRestore.className = `btn-cet`
                
                liBtnRestore.appendChild(buttonBtnRestore)
                
                let liBtnTrash = crEl('li')
                liBtnTrash.id = `btn-trash-${index}`
                liBtnTrash.className = `item-cet`
                
                let buttonBtnTrash = crEl('button')
                buttonBtnTrash.addEventListener('click', () => {
                    trashTasks.splice(index, 1)

                    ulListTasksTrash.removeChild(elSel(`#task-${index}`))
                    tasksView('trash')
                    console.log(allTasks, trashTasks)
                })
                buttonBtnTrash.id = `trash-task-${index}`
                buttonBtnTrash.className = `btn-cet`
                
                liBtnTrash.appendChild(buttonBtnTrash)
                
                ulTaskCet.appendChild(liBtnRestore)
                ulTaskCet.appendChild(liBtnTrash)

                liItemListTask.appendChild(inputTaskDesc)
                liItemListTask.appendChild(ulTaskCet)
                
                ulListTasksTrash.appendChild(liItemListTask)

                elSel('#content-tasks-list').appendChild(ulListTasksTrash)
                });
            }
        break;
    }
}