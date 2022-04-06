"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTask = /*#__PURE__*/_createClass(function MyTask(task) {
  _classCallCheck(this, MyTask);

  this.mytask = task;
  this.complete = false;
});

var pomoTasks = {
  newTasks: [],
  allTasks: [],
  trashTasks: []
};
var newTasks = pomoTasks.newTasks,
    allTasks = pomoTasks.allTasks,
    trashTasks = pomoTasks.trashTasks;

function addNewTask() {
  var liItemAddTask = crEl('li');
  liItemAddTask.className = 'item-add-task';
  liItemAddTask.id = "item-add-task-".concat(newTasks.length);
  var inputNewTask = crEl('input');
  inputNewTask.setAttribute('type', 'text');
  inputNewTask.setAttribute('name', "new-task-".concat(newTasks.length));
  inputNewTask.setAttribute('placeholder', "Try 'search about egypt'");
  inputNewTask.setAttribute('autocomplete', 'off');
  inputNewTask.setAttribute('autofocus', 'on');
  inputNewTask.id = "new-task-".concat(newTasks.length);
  inputNewTask.className = "new-add-task";
  var ulAddCet = crEl('ul');
  ulAddCet.id = "add-cet-".concat(newTasks.length);
  ulAddCet.className = "add-cet";
  var liItemCet = crEl('li');
  liItemCet.id = "item-cet-".concat(newTasks.length);
  liItemCet.className = "item-cet";
  var buttonBtnConTask = crEl('button');
  buttonBtnConTask.className = "btn-con-task";
  buttonBtnConTask.setAttribute('onClick', "newTask(".concat(newTasks.length, ")"));
  liItemCet.appendChild(buttonBtnConTask);
  ulAddCet.appendChild(liItemCet);
  liItemAddTask.appendChild(inputNewTask);
  liItemAddTask.appendChild(ulAddCet);
  elSel('#add-task-list').appendChild(liItemAddTask);
  elSel('#add-task').disabled = true;
}

function newTask(param) {
  if (elSel("#new-task-".concat(param)).value.length < 5) {
    console.log('Descrição com menos de 5 caracters');
  } else {
    newTasks.push(elSel("#new-task-".concat(param)).value);
    elSel("#new-task-".concat(param)).disabled = true;
    elSel("#new-task-".concat(param)).style.borderColor = 'rgba(0,0,0,.05)';
    elSel("#add-cet-".concat(param)).removeChild(elSel("#item-cet-".concat(param)));
    var liItemCetEdit = crEl('li');
    liItemCetEdit.id = "item-cet-edit-".concat(param);
    liItemCetEdit.className = "item-cet";
    var buttonBtnEditTask = crEl('button');
    buttonBtnEditTask.className = "btn-edit-task";
    buttonBtnEditTask.setAttribute('onClick', "newTaskFunctions('edit', ".concat(param, ")"));
    liItemCetEdit.appendChild(buttonBtnEditTask);
    elSel("#add-cet-".concat(param)).appendChild(liItemCetEdit);
    var liItemCetTrash = crEl('li');
    liItemCetTrash.id = "item-cet-trash-".concat(param);
    liItemCetTrash.className = "item-cet";
    var buttonBtnTrashTask = crEl('button');
    buttonBtnTrashTask.className = "btn-trash-task";
    buttonBtnTrashTask.setAttribute('onClick', "newTaskFunctions('trash', ".concat(param, ")"));
    liItemCetTrash.appendChild(buttonBtnTrashTask);
    elSel("#add-cet-".concat(param)).appendChild(liItemCetTrash);
    elSel('#add-task').disabled = false;
    console.log(newTasks);
  }
}

function newTaskFunctions(param, index) {
  switch (param) {
    case 'edit':
      console.log('Edit task');
      elSel("#new-task-".concat(index)).disabled = false;
      elSel("#new-task-".concat(index)).style.borderColor = 'rgba(0,0,0,.5)';
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-edit-".concat(index)));
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-trash-".concat(index)));
      var liItemCetSaveEdit = crEl('li');
      liItemCetSaveEdit.id = "item-cet-save-edit-".concat(index);
      liItemCetSaveEdit.className = "item-cet";
      var buttonBtnSaveEditTask = crEl('button');
      buttonBtnSaveEditTask.className = "btn-save-edit-task";
      buttonBtnSaveEditTask.setAttribute('onClick', "newTaskFunctions('saveEdit', ".concat(index, ")"));
      liItemCetSaveEdit.appendChild(buttonBtnSaveEditTask);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetSaveEdit);
      var liItemCetCancelEdit = crEl('li');
      liItemCetCancelEdit.id = "item-cet-cancel-edit-".concat(index);
      liItemCetCancelEdit.className = "item-cet";
      var buttonBtnCancelEditTask = crEl('button');
      buttonBtnCancelEditTask.className = "btn-cancel-edit-task";
      buttonBtnCancelEditTask.setAttribute('onClick', "newTaskFunctions('cancel', ".concat(index, ")"));
      liItemCetCancelEdit.appendChild(buttonBtnCancelEditTask);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetCancelEdit);
      break;

    case 'trash':
      console.log('Trash task');
      elSel('#add-task-list').removeChild(elSel("#item-add-task-".concat(index)));
      newTasks.splice(index, 1);

      if (newTasks.length > 0) {
        elSel('#content-add-task-list').removeChild(elSel('#add-task-list'));
        var ulAddTaskList = crEl('ul');
        ulAddTaskList.id = 'add-task-list';
        elSel('#content-add-task-list').appendChild(ulAddTaskList);
        newTasks.forEach(function (task, index) {
          var liItemAddTask = crEl('li');
          liItemAddTask.className = 'item-add-task';
          liItemAddTask.id = "item-add-task-".concat(index);
          var inputNewTask = crEl('input');
          inputNewTask.setAttribute('type', 'text');
          inputNewTask.setAttribute('name', "new-task-".concat(index));
          inputNewTask.setAttribute('placeholder', "Try 'search about egypt'");
          inputNewTask.setAttribute('value', "".concat(newTasks[index]));
          inputNewTask.setAttribute('autocomplete', 'off');
          inputNewTask.setAttribute('autofocus', 'on');
          inputNewTask.id = "new-task-".concat(index);
          inputNewTask.className = "new-add-task";
          inputNewTask.disabled = true;
          inputNewTask.style.borderColor = 'rgba(0,0,0,.05)';
          var ulAddCet = crEl('ul');
          ulAddCet.id = "add-cet-".concat(index);
          ulAddCet.className = "add-cet";
          liItemAddTask.appendChild(inputNewTask);
          liItemAddTask.appendChild(ulAddCet);
          var liItemCetEdit = crEl('li');
          liItemCetEdit.id = "item-cet-edit-".concat(index);
          liItemCetEdit.className = "item-cet";
          var buttonBtnEditTask = crEl('button');
          buttonBtnEditTask.className = "btn-edit-task";
          buttonBtnEditTask.setAttribute('onClick', "newTaskFunctions('edit', ".concat(index, ")"));
          liItemCetEdit.appendChild(buttonBtnEditTask);
          ulAddCet.appendChild(liItemCetEdit);
          var liItemCetTrash = crEl('li');
          liItemCetTrash.id = "item-cet-trash-".concat(index);
          liItemCetTrash.className = "item-cet";
          var buttonBtnTrashTask = crEl('button');
          buttonBtnTrashTask.className = "btn-trash-task";
          buttonBtnTrashTask.setAttribute('onClick', "newTaskFunctions('trash', ".concat(index, ")"));
          liItemCetTrash.appendChild(buttonBtnTrashTask);
          ulAddCet.appendChild(liItemCetTrash);
          ulAddTaskList.appendChild(liItemAddTask);
        });
      }

      break;

    case 'saveEdit':
      console.log('Save Edit Task');
      elSel("#new-task-".concat(index)).disabled = true;
      elSel("#new-task-".concat(index)).style.borderColor = 'rgba(0,0,0,.05)';
      newTasks[index] = elSel("#new-task-".concat(index)).value;
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-save-edit-".concat(index)));
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-cancel-edit-".concat(index)));
      var liItemCetEdit = crEl('li');
      liItemCetEdit.id = "item-cet-edit-".concat(index);
      liItemCetEdit.className = "item-cet";
      var buttonBtnEditTask = crEl('button');
      buttonBtnEditTask.className = "btn-edit-task";
      buttonBtnEditTask.setAttribute('onClick', "newTaskFunctions('edit', ".concat(index, ")"));
      liItemCetEdit.appendChild(buttonBtnEditTask);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetEdit);
      var liItemCetTrash = crEl('li');
      liItemCetTrash.id = "item-cet-trash-".concat(index);
      liItemCetTrash.className = "item-cet";
      var buttonBtnTrashTask = crEl('button');
      buttonBtnTrashTask.className = "btn-trash-task";
      buttonBtnTrashTask.setAttribute('onClick', "newTaskFunctions('trash', ".concat(index, ")"));
      liItemCetTrash.appendChild(buttonBtnTrashTask);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetTrash);
      break;

    default:
      console.log('Cancel edit Task');
      elSel("#new-task-".concat(index)).disabled = true;
      elSel("#new-task-".concat(index)).style.borderColor = 'rgba(0,0,0,.05)';
      elSel("#new-task-".concat(index)).value = newTasks[index];
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-save-edit-".concat(index)));
      elSel("#add-cet-".concat(index)).removeChild(elSel("#item-cet-cancel-edit-".concat(index)));
      var liItemCetEditC = crEl('li');
      liItemCetEditC.id = "item-cet-edit-".concat(index);
      liItemCetEditC.className = "item-cet";
      var buttonBtnEditTaskC = crEl('button');
      buttonBtnEditTaskC.className = "btn-edit-task";
      buttonBtnEditTaskC.setAttribute('onClick', "newTaskFunctions('edit', ".concat(index, ")"));
      liItemCetEditC.appendChild(buttonBtnEditTaskC);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetEditC);
      var liItemCetTrashC = crEl('li');
      liItemCetTrashC.id = "item-cet-trash-".concat(index);
      liItemCetTrashC.className = "item-cet";
      var buttonBtnTrashTaskC = crEl('button');
      buttonBtnTrashTaskC.className = "btn-trash-task";
      buttonBtnTrashTaskC.setAttribute('onClick', "newTaskFunctions('trash', ".concat(index, ")"));
      liItemCetTrashC.appendChild(buttonBtnTrashTaskC);
      elSel("#add-cet-".concat(index)).appendChild(liItemCetTrashC);
      break;
  }

  console.log(newTasks);
}

function addTask() {
  if (newTasks.length > 0) {
    newTasks.forEach(function (task, index) {
      var newTask = new MyTask(newTasks[index]);
      allTasks.push(newTask);
    });
    newTasks = [];
    console.log(allTasks);
    console.log(newTasks);
  }
}

function tasksView(param) {
  elSel('#btn-all-task-list').classList.remove('borderColor');
  elSel('#btn-complete-list').classList.remove('borderColor');
  elSel('#btn-incomplete-list').classList.remove('borderColor');
  elSel('#btn-trash-list').classList.remove('borderColor');

  switch (param) {
    case 'allTasks':
      console.log('all tasks');
      elSel('#btn-all-task-list').classList.add('borderColor');
      var ulListTasks = crEl('ul');
      ulListTasks.id = 'list-tasks';
      elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
      elSel('#content-tasks-list').appendChild(ulListTasks);

      if (allTasks.length > 0) {
        elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
        allTasks.forEach(function (task, index) {
          var liItemListTask = crEl('li');
          liItemListTask.id = "task-".concat(index);
          liItemListTask.className = "item-list-task";
          var inputTaskDesc = crEl('input');
          inputTaskDesc.setAttribute('type', 'text');
          inputTaskDesc.setAttribute('name', "task-desc-".concat(index));
          inputTaskDesc.id = "task-desc-".concat(index);
          inputTaskDesc.value = "".concat(task.mytask);
          inputTaskDesc.disabled = true;
          var ulTaskCet = crEl('ul');
          ulTaskCet.id = "task-cet-".concat(index);
          ulTaskCet.className = "task-cet";
          var liBtnCheck = crEl('li');
          liBtnCheck.id = "btn-check-".concat(index);
          liBtnCheck.className = "item-cet";
          var inputBtnCheck = crEl('input');
          inputBtnCheck.setAttribute('type', 'checkbox');
          inputBtnCheck.setAttribute('name', 'check-task');
          inputBtnCheck.addEventListener('click', function () {
            task.complete === false ? task.complete = true : task.complete = false;
          });
          inputBtnCheck.id = "check-task-".concat(index);
          inputBtnCheck.className = "btn-cet";

          if (task.complete === true) {
            inputBtnCheck.checked = true;
          }

          liBtnCheck.appendChild(inputBtnCheck);
          var liBtnEdit = crEl('li');
          liBtnEdit.id = "btn-edit-".concat(index);
          liBtnEdit.className = "item-cet";
          var buttonBtnEdit = crEl('button');
          buttonBtnEdit.addEventListener('click', function () {
            inputTaskDesc.disabled = false;
            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)';
            liBtnCheck.style.display = 'none';
            liBtnEdit.style.display = 'none';
            liBtnTrash.style.display = 'none';
            liBtnSaveEdit.style.display = 'flex';
            liBtnCancelEdit.style.display = 'flex';
          });
          buttonBtnEdit.id = "edit-task-".concat(index);
          buttonBtnEdit.className = "btn-cet";
          liBtnEdit.appendChild(buttonBtnEdit);
          var liBtnTrash = crEl('li');
          liBtnTrash.id = "btn-trash-".concat(index);
          liBtnTrash.className = "item-cet";
          var buttonBtnTrash = crEl('button');
          buttonBtnTrash.addEventListener('click', function () {
            trashTasks.push(allTasks[index]);
            allTasks.splice(index, 1);
            ulListTasks.removeChild(elSel("#task-".concat(index)));
            tasksView('allTasks');
            console.log(allTasks, trashTasks);
          });
          buttonBtnTrash.id = "trash-task-".concat(index);
          buttonBtnTrash.className = "btn-cet";
          liBtnTrash.appendChild(buttonBtnTrash);
          var liBtnSaveEdit = crEl('li');
          liBtnSaveEdit.id = "btn-save-edit-".concat(index);
          liBtnSaveEdit.className = "item-cet";
          liBtnSaveEdit.style.display = "none";
          var buttonBtnSaveEdit = crEl('button');
          buttonBtnSaveEdit.addEventListener('click', function () {
            task.mytask = inputTaskDesc.value;
            inputTaskDesc.disabled = true;
            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
            liBtnCheck.style.display = 'flex';
            liBtnEdit.style.display = 'flex';
            liBtnTrash.style.display = 'flex';
            liBtnSaveEdit.style.display = 'none';
            liBtnCancelEdit.style.display = 'none';
          });
          buttonBtnSaveEdit.id = "save-edit-task-".concat(index);
          buttonBtnSaveEdit.className = "btn-cet";
          liBtnSaveEdit.appendChild(buttonBtnSaveEdit);
          var liBtnCancelEdit = crEl('li');
          liBtnCancelEdit.id = "btn-cancel-edit-".concat(index);
          liBtnCancelEdit.className = "item-cet";
          liBtnCancelEdit.style.display = "none";
          var buttonBtnCancelEdit = crEl('button');
          buttonBtnCancelEdit.addEventListener('click', function () {
            inputTaskDesc.value = task.mytask;
            inputTaskDesc.disabled = true;
            inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
            liBtnCheck.style.display = 'flex';
            liBtnEdit.style.display = 'flex';
            liBtnTrash.style.display = 'flex';
            liBtnSaveEdit.style.display = 'none';
            liBtnCancelEdit.style.display = 'none';
          });
          buttonBtnCancelEdit.id = "cancel-edit-task-".concat(index);
          buttonBtnCancelEdit.className = "btn-cet";
          liBtnCancelEdit.appendChild(buttonBtnCancelEdit);
          ulTaskCet.appendChild(liBtnCheck);
          ulTaskCet.appendChild(liBtnEdit);
          ulTaskCet.appendChild(liBtnTrash);
          ulTaskCet.appendChild(liBtnSaveEdit);
          ulTaskCet.appendChild(liBtnCancelEdit);
          liItemListTask.appendChild(inputTaskDesc);
          liItemListTask.appendChild(ulTaskCet);
          ulListTasks.appendChild(liItemListTask);
          elSel('#content-tasks-list').appendChild(ulListTasks);
        });
      }

      break;

    case 'complete':
      console.log('Complete Tasks');
      elSel('#btn-complete-list').classList.add('borderColor');
      var ulListTasksCom = crEl('ul');
      ulListTasksCom.id = 'list-tasks';
      elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
      elSel('#content-tasks-list').appendChild(ulListTasksCom);

      if (allTasks.length > 0) {
        allTasks.forEach(function (task, index) {
          if (task.complete === true) {
            var liItemListTask = crEl('li');
            liItemListTask.id = "task-".concat(index);
            liItemListTask.className = "item-list-task";
            var inputTaskDesc = crEl('input');
            inputTaskDesc.setAttribute('type', 'text');
            inputTaskDesc.setAttribute('name', "task-desc-".concat(index));
            inputTaskDesc.id = "task-desc-".concat(index);
            inputTaskDesc.value = "".concat(task.mytask);
            inputTaskDesc.disabled = true;
            var ulTaskCet = crEl('ul');
            ulTaskCet.id = "task-cet-".concat(index);
            ulTaskCet.className = "task-cet";
            var liBtnCheck = crEl('li');
            liBtnCheck.id = "btn-check-".concat(index);
            liBtnCheck.className = "item-cet";
            var inputBtnCheck = crEl('input');
            inputBtnCheck.setAttribute('type', 'checkbox');
            inputBtnCheck.setAttribute('name', 'check-task');
            inputBtnCheck.addEventListener('click', function () {
              task.complete === false ? task.complete = true : task.complete = false;
            });
            inputBtnCheck.id = "check-task-".concat(index);
            inputBtnCheck.className = "btn-cet";

            if (task.complete === true) {
              inputBtnCheck.checked = true;
            }

            liBtnCheck.appendChild(inputBtnCheck);
            var liBtnEdit = crEl('li');
            liBtnEdit.id = "btn-edit-".concat(index);
            liBtnEdit.className = "item-cet";
            var buttonBtnEdit = crEl('button');
            buttonBtnEdit.addEventListener('click', function () {
              inputTaskDesc.disabled = false;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)';
              liBtnCheck.style.display = 'none';
              liBtnEdit.style.display = 'none';
              liBtnTrash.style.display = 'none';
              liBtnSaveEdit.style.display = 'flex';
              liBtnCancelEdit.style.display = 'flex';
            });
            buttonBtnEdit.id = "edit-task-".concat(index);
            buttonBtnEdit.className = "btn-cet";
            liBtnEdit.appendChild(buttonBtnEdit);
            var liBtnTrash = crEl('li');
            liBtnTrash.id = "btn-trash-".concat(index);
            liBtnTrash.className = "item-cet";
            var buttonBtnTrash = crEl('button');
            buttonBtnTrash.addEventListener('click', function () {
              trashTasks.push(allTasks[index]);
              allTasks.splice(index, 1);
              ulListTasksCom.removeChild(elSel("#task-".concat(index)));
              tasksView('complete');
              console.log(allTasks, trashTasks);
            });
            buttonBtnTrash.id = "trash-task-".concat(index);
            buttonBtnTrash.className = "btn-cet";
            liBtnTrash.appendChild(buttonBtnTrash);
            var liBtnSaveEdit = crEl('li');
            liBtnSaveEdit.id = "btn-save-edit-".concat(index);
            liBtnSaveEdit.className = "item-cet";
            liBtnSaveEdit.style.display = "none";
            var buttonBtnSaveEdit = crEl('button');
            buttonBtnSaveEdit.addEventListener('click', function () {
              task.mytask = inputTaskDesc.value;
              inputTaskDesc.disabled = true;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
              liBtnCheck.style.display = 'flex';
              liBtnEdit.style.display = 'flex';
              liBtnTrash.style.display = 'flex';
              liBtnSaveEdit.style.display = 'none';
              liBtnCancelEdit.style.display = 'none';
            });
            buttonBtnSaveEdit.id = "save-edit-task-".concat(index);
            buttonBtnSaveEdit.className = "btn-cet";
            liBtnSaveEdit.appendChild(buttonBtnSaveEdit);
            var liBtnCancelEdit = crEl('li');
            liBtnCancelEdit.id = "btn-cancel-edit-".concat(index);
            liBtnCancelEdit.className = "item-cet";
            liBtnCancelEdit.style.display = "none";
            var buttonBtnCancelEdit = crEl('button');
            buttonBtnCancelEdit.addEventListener('click', function () {
              inputTaskDesc.value = task.mytask;
              inputTaskDesc.disabled = true;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
              liBtnCheck.style.display = 'flex';
              liBtnEdit.style.display = 'flex';
              liBtnTrash.style.display = 'flex';
              liBtnSaveEdit.style.display = 'none';
              liBtnCancelEdit.style.display = 'none';
            });
            buttonBtnCancelEdit.id = "cancel-edit-task-".concat(index);
            buttonBtnCancelEdit.className = "btn-cet";
            liBtnCancelEdit.appendChild(buttonBtnCancelEdit);
            ulTaskCet.appendChild(liBtnCheck);
            ulTaskCet.appendChild(liBtnEdit);
            ulTaskCet.appendChild(liBtnTrash);
            ulTaskCet.appendChild(liBtnSaveEdit);
            ulTaskCet.appendChild(liBtnCancelEdit);
            liItemListTask.appendChild(inputTaskDesc);
            liItemListTask.appendChild(ulTaskCet);
            ulListTasksCom.appendChild(liItemListTask);
            elSel('#content-tasks-list').appendChild(ulListTasksCom);
          }
        });
      }

      break;

    case 'incomplete':
      console.log('Incomplete Tasks');
      elSel('#btn-incomplete-list').classList.add('borderColor');
      var ulListTasksIn = crEl('ul');
      ulListTasksIn.id = 'list-tasks';
      elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
      elSel('#content-tasks-list').appendChild(ulListTasksIn);

      if (allTasks.length > 0) {
        allTasks.forEach(function (task, index) {
          if (task.complete === false) {
            var liItemListTask = crEl('li');
            liItemListTask.id = "task-".concat(index);
            liItemListTask.className = "item-list-task";
            var inputTaskDesc = crEl('input');
            inputTaskDesc.setAttribute('type', 'text');
            inputTaskDesc.setAttribute('name', "task-desc-".concat(index));
            inputTaskDesc.id = "task-desc-".concat(index);
            inputTaskDesc.value = "".concat(task.mytask);
            inputTaskDesc.disabled = true;
            var ulTaskCet = crEl('ul');
            ulTaskCet.id = "task-cet-".concat(index);
            ulTaskCet.className = "task-cet";
            var liBtnCheck = crEl('li');
            liBtnCheck.id = "btn-check-".concat(index);
            liBtnCheck.className = "item-cet";
            var inputBtnCheck = crEl('input');
            inputBtnCheck.setAttribute('type', 'checkbox');
            inputBtnCheck.setAttribute('name', 'check-task');
            inputBtnCheck.addEventListener('click', function () {
              task.complete === false ? task.complete = true : task.complete = false;
            });
            inputBtnCheck.id = "check-task-".concat(index);
            inputBtnCheck.className = "btn-cet";

            if (task.complete === true) {
              inputBtnCheck.checked = true;
            }

            liBtnCheck.appendChild(inputBtnCheck);
            var liBtnEdit = crEl('li');
            liBtnEdit.id = "btn-edit-".concat(index);
            liBtnEdit.className = "item-cet";
            var buttonBtnEdit = crEl('button');
            buttonBtnEdit.addEventListener('click', function () {
              inputTaskDesc.disabled = false;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.5)';
              liBtnCheck.style.display = 'none';
              liBtnEdit.style.display = 'none';
              liBtnTrash.style.display = 'none';
              liBtnSaveEdit.style.display = 'flex';
              liBtnCancelEdit.style.display = 'flex';
            });
            buttonBtnEdit.id = "edit-task-".concat(index);
            buttonBtnEdit.className = "btn-cet";
            liBtnEdit.appendChild(buttonBtnEdit);
            var liBtnTrash = crEl('li');
            liBtnTrash.id = "btn-trash-".concat(index);
            liBtnTrash.className = "item-cet";
            var buttonBtnTrash = crEl('button');
            buttonBtnTrash.addEventListener('click', function () {
              trashTasks.push(allTasks[index]);
              allTasks.splice(index, 1);
              ulListTasksIn.removeChild(elSel("#task-".concat(index)));
              tasksView('incomplete');
              console.log(allTasks, trashTasks);
            });
            buttonBtnTrash.id = "trash-task-".concat(index);
            buttonBtnTrash.className = "btn-cet";
            liBtnTrash.appendChild(buttonBtnTrash);
            var liBtnSaveEdit = crEl('li');
            liBtnSaveEdit.id = "btn-save-edit-".concat(index);
            liBtnSaveEdit.className = "item-cet";
            liBtnSaveEdit.style.display = "none";
            var buttonBtnSaveEdit = crEl('button');
            buttonBtnSaveEdit.addEventListener('click', function () {
              task.mytask = inputTaskDesc.value;
              inputTaskDesc.disabled = true;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
              liBtnCheck.style.display = 'flex';
              liBtnEdit.style.display = 'flex';
              liBtnTrash.style.display = 'flex';
              liBtnSaveEdit.style.display = 'none';
              liBtnCancelEdit.style.display = 'none';
            });
            buttonBtnSaveEdit.id = "save-edit-task-".concat(index);
            buttonBtnSaveEdit.className = "btn-cet";
            liBtnSaveEdit.appendChild(buttonBtnSaveEdit);
            var liBtnCancelEdit = crEl('li');
            liBtnCancelEdit.id = "btn-cancel-edit-".concat(index);
            liBtnCancelEdit.className = "item-cet";
            liBtnCancelEdit.style.display = "none";
            var buttonBtnCancelEdit = crEl('button');
            buttonBtnCancelEdit.addEventListener('click', function () {
              inputTaskDesc.value = task.mytask;
              inputTaskDesc.disabled = true;
              inputTaskDesc.style.borderColor = 'rgba(0,0,0,.05)';
              liBtnCheck.style.display = 'flex';
              liBtnEdit.style.display = 'flex';
              liBtnTrash.style.display = 'flex';
              liBtnSaveEdit.style.display = 'none';
              liBtnCancelEdit.style.display = 'none';
            });
            buttonBtnCancelEdit.id = "cancel-edit-task-".concat(index);
            buttonBtnCancelEdit.className = "btn-cet";
            liBtnCancelEdit.appendChild(buttonBtnCancelEdit);
            ulTaskCet.appendChild(liBtnCheck);
            ulTaskCet.appendChild(liBtnEdit);
            ulTaskCet.appendChild(liBtnTrash);
            ulTaskCet.appendChild(liBtnSaveEdit);
            ulTaskCet.appendChild(liBtnCancelEdit);
            liItemListTask.appendChild(inputTaskDesc);
            liItemListTask.appendChild(ulTaskCet);
            ulListTasksIn.appendChild(liItemListTask);
            elSel('#content-tasks-list').appendChild(ulListTasksIn);
          }
        });
      }

      break;

    case 'trash':
      console.log('Trash Tasks');
      elSel('#btn-trash-list').classList.add('borderColor');
      var ulListTasksTrash = crEl('ul');
      ulListTasksTrash.id = 'list-tasks';
      elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
      elSel('#content-tasks-list').appendChild(ulListTasksTrash);

      if (trashTasks.length > 0) {
        elSel('#content-tasks-list').removeChild(elSel('#list-tasks'));
        trashTasks.forEach(function (task, index) {
          var liItemListTask = crEl('li');
          liItemListTask.id = "task-".concat(index);
          liItemListTask.className = "item-list-task";
          var inputTaskDesc = crEl('input');
          inputTaskDesc.setAttribute('type', 'text');
          inputTaskDesc.setAttribute('name', "task-desc-".concat(index));
          inputTaskDesc.id = "task-desc-".concat(index);
          inputTaskDesc.value = "".concat(task.mytask);
          inputTaskDesc.disabled = true;
          var ulTaskCet = crEl('ul');
          ulTaskCet.id = "task-cet-".concat(index);
          ulTaskCet.className = "task-cet";
          var liBtnRestore = crEl('li');
          liBtnRestore.id = "btn-restore-".concat(index);
          liBtnRestore.className = "item-cet btn-restore";
          var buttonBtnRestore = crEl('button');
          buttonBtnRestore.addEventListener('click', function () {
            allTasks.push(trashTasks[index]);
            trashTasks.splice(index, 1);
            ulListTasksTrash.removeChild(elSel("#task-".concat(index)));
            tasksView('trash');
            console.log(allTasks, trashTasks);
          });
          buttonBtnRestore.id = "restore-task-".concat(index);
          buttonBtnRestore.className = "btn-cet";
          liBtnRestore.appendChild(buttonBtnRestore);
          var liBtnTrash = crEl('li');
          liBtnTrash.id = "btn-trash-".concat(index);
          liBtnTrash.className = "item-cet";
          var buttonBtnTrash = crEl('button');
          buttonBtnTrash.addEventListener('click', function () {
            trashTasks.splice(index, 1);
            ulListTasksTrash.removeChild(elSel("#task-".concat(index)));
            tasksView('trash');
            console.log(allTasks, trashTasks);
          });
          buttonBtnTrash.id = "trash-task-".concat(index);
          buttonBtnTrash.className = "btn-cet";
          liBtnTrash.appendChild(buttonBtnTrash);
          ulTaskCet.appendChild(liBtnRestore);
          ulTaskCet.appendChild(liBtnTrash);
          liItemListTask.appendChild(inputTaskDesc);
          liItemListTask.appendChild(ulTaskCet);
          ulListTasksTrash.appendChild(liItemListTask);
          elSel('#content-tasks-list').appendChild(ulListTasksTrash);
        });
      }

      break;
  }
}