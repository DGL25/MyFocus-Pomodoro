"use strict";

var crEl = function crEl(el) {
  return document.createElement(el);
};

var modalsStatus = {
  endTime: {
    showModal: false,
    pomoFocus: 0,
    shortBreak: 0,
    titlesTexts: [{
      pomodoroTitle: "Hey, it's time to get back into action",
      pomodoroText: 'You have 25 more minutes to focus on your activities'
    }, {
      shortBreakTitle: "Hey, it's time to rest",
      shortBreakText: 'You have 5 minutes to rest, drink some water, walk, then come back when the alarm goes off'
    }, {
      longBreakTitle: "Hey, you've been focusing a lot, rest",
      longBreakText: 'You have 15 minutes to rest, walk, drink water, and come back later.'
    }]
  },
  myTasks: {
    showModal: false
  },
  addTasks: {
    showModal: false
  },
  alertAuido: false
};
var endTime = modalsStatus.endTime,
    myTasks = modalsStatus.myTasks,
    addTasks = modalsStatus.addTasks,
    alertAuido = modalsStatus.alertAuido;
var pomoFocus = endTime.pomoFocus,
    shortBreak = endTime.shortBreak,
    titlesTexts = endTime.titlesTexts;

var showModals = function showModals(modal) {
  switch (modal) {
    case 'endTime':
      if (endTime.showModal === false && alertAuido === false) {
        endTime.showModal = true;
        var sectionEndTime = crEl('section');
        sectionEndTime.id = 'end-time';
        var mainContentEndTime = crEl('main');
        mainContentEndTime.id = 'content-end-time';
        var h1TitleEndTime = crEl('h1');
        h1TitleEndTime.id = 'title-end-time';
        var pTextEndTime = crEl('p');
        pTextEndTime.id = 'text-end-time';

        if (typeTime === 'pomodoro') {
          h1TitleEndTime.textContent = "".concat(endTime.titlesTexts[0].pomodoroTitle);
          pTextEndTime.textContent = "".concat(endTime.titlesTexts[0].pomodoroText);
        } else if (typeTime === 'shortBreak') {
          h1TitleEndTime.textContent = "".concat(endTime.titlesTexts[1].shortBreakTitle);
          pTextEndTime.textContent = "".concat(endTime.titlesTexts[1].shortBreakText);
        } else if (typeTime === 'longBreak') {
          h1TitleEndTime.textContent = "".concat(endTime.titlesTexts[2].longBreakTitle);
          pTextEndTime.textContent = "".concat(endTime.titlesTexts[2].longBreakText);
        }

        var buttonBtnEndTime = crEl('button');
        buttonBtnEndTime.id = 'btn-end-time';
        buttonBtnEndTime.textContent = 'OK!';
        buttonBtnEndTime.setAttribute('onclick', "showModals('endTime')");
        mainContentEndTime.appendChild(h1TitleEndTime);
        mainContentEndTime.appendChild(pTextEndTime);
        mainContentEndTime.appendChild(buttonBtnEndTime);
        sectionEndTime.appendChild(mainContentEndTime);
        document.body.appendChild(sectionEndTime);
        alertAuido = true;
        var audioAlert = crEl('audio');
        audioAlert.id = 'audio-alert';
        audioAlert.setAttribute('autoplay', '');
        audioAlert.setAttribute('loop', '');
        var audioPlay = crEl('source');
        audioPlay.setAttribute('src', 'media/audio/alarme.mp3');
        audioPlay.setAttribute('type', 'audio/mpeg');
        audioAlert.appendChild(audioPlay);
        document.body.appendChild(audioAlert);
      } else {
        document.body.removeChild(elSel('#end-time'));
        endTime.showModal = false;
        document.body.removeChild(elSel('#audio-alert'));
        alertAuido = false;
      }

      break;

    case 'myTasks':
      if (myTasks.showModal === false) {
        myTasks.showModal = true;
        var sectionMyTasks = crEl('section');
        sectionMyTasks.id = 'my-tasks';
        var mainContentMyTasks = crEl('main');
        mainContentMyTasks.id = 'content-my-tasks';
        var headerNavBarTasks = crEl('header');
        headerNavBarTasks.id = 'nav-bar-tasks';
        var navNavigation = crEl('nav');
        navNavigation.id = 'navigation';
        var ulNavBar1 = crEl('ul');
        ulNavBar1.className = 'nav-bar';
        var liItemNav1Ul1 = crEl('li');
        liItemNav1Ul1.className = 'item-nav';
        var h1ItemNav1Ul1 = crEl('h1');
        h1ItemNav1Ul1.textContent = 'My Tasks';
        liItemNav1Ul1.appendChild(h1ItemNav1Ul1);
        var liItemNav2Ul1 = crEl('li');
        liItemNav2Ul1.className = 'item-nav';
        var buttonItemNav2Ul1 = crEl('button');
        buttonItemNav2Ul1.className = 'btn-close';
        buttonItemNav2Ul1.setAttribute('onclick', "showModals('myTasks')");
        liItemNav2Ul1.appendChild(buttonItemNav2Ul1);
        ulNavBar1.appendChild(liItemNav1Ul1);
        ulNavBar1.appendChild(liItemNav2Ul1);
        var ulNavBar2 = crEl('ul');
        ulNavBar2.className = 'nav-bar';
        var liItemNav1Ul2 = crEl('li');
        liItemNav1Ul2.className = 'item-nav';
        var buttonBtnAllTasks = crEl('button');
        buttonBtnAllTasks.className = 'btn-list-task';
        buttonBtnAllTasks.id = 'btn-all-task-list';
        buttonBtnAllTasks.textContent = 'All Tasks';
        buttonBtnAllTasks.setAttribute('onclick', "tasksView('allTasks')");
        liItemNav1Ul2.appendChild(buttonBtnAllTasks);
        var liItemNav2Ul2 = crEl('li');
        liItemNav2Ul2.className = 'item-nav';
        var buttonBtnComplete = crEl('button');
        buttonBtnComplete.className = 'btn-list-task';
        buttonBtnComplete.id = 'btn-complete-list';
        buttonBtnComplete.textContent = 'Complete';
        buttonBtnComplete.setAttribute('onclick', "tasksView('complete')");
        liItemNav2Ul2.appendChild(buttonBtnComplete);
        var liItemNav3Ul2 = crEl('li');
        liItemNav3Ul2.className = 'item-nav';
        var buttonBtnIncomplete = crEl('button');
        buttonBtnIncomplete.className = 'btn-list-task';
        buttonBtnIncomplete.id = 'btn-incomplete-list';
        buttonBtnIncomplete.textContent = 'Incomplete';
        buttonBtnIncomplete.setAttribute('onclick', "tasksView('incomplete')");
        liItemNav3Ul2.appendChild(buttonBtnIncomplete);
        var liItemNav4Ul2 = crEl('li');
        liItemNav4Ul2.className = 'item-nav';
        var buttonBtnTrash = crEl('button');
        buttonBtnTrash.className = 'btn-list-task';
        buttonBtnTrash.id = 'btn-trash-list';
        buttonBtnTrash.textContent = 'Trash';
        buttonBtnTrash.setAttribute('onclick', "tasksView('trash')");
        liItemNav4Ul2.appendChild(buttonBtnTrash);
        ulNavBar2.appendChild(liItemNav1Ul2);
        ulNavBar2.appendChild(liItemNav2Ul2);
        ulNavBar2.appendChild(liItemNav3Ul2);
        ulNavBar2.appendChild(liItemNav4Ul2);
        navNavigation.appendChild(ulNavBar1);
        navNavigation.appendChild(ulNavBar2);
        headerNavBarTasks.appendChild(navNavigation);
        var sectionContentTasksList = crEl('section');
        sectionContentTasksList.id = 'content-tasks-list';
        var ulListTasks = crEl('ul');
        ulListTasks.id = 'list-tasks';
        sectionContentTasksList.appendChild(ulListTasks);
        mainContentMyTasks.appendChild(headerNavBarTasks);
        mainContentMyTasks.appendChild(sectionContentTasksList);
        sectionMyTasks.appendChild(mainContentMyTasks);
        document.body.appendChild(sectionMyTasks);
        tasksView('allTasks');
      } else {
        document.body.removeChild(elSel('#my-tasks'));
        myTasks.showModal = false;
      }

      break;

    case 'addTasks':
      if (addTasks.showModal === false) {
        addTasks.showModal = true;
        var sectionAddTasks = crEl('section');
        sectionAddTasks.id = 'add-tasks';
        var mainContentAddTasks = crEl('main');
        mainContentAddTasks.id = 'content-add-tasks';
        var headerNavBarAddTasks = crEl('header');
        headerNavBarAddTasks.id = 'nav-bar-add-tasks';
        var ulTitleAddTasks = crEl('ul');
        ulTitleAddTasks.id = 'titles-add-tasks';
        var liItemTitle1 = crEl('li');
        liItemTitle1.className = 'item-title';
        var h1TitleAddTasks = crEl('h1');
        h1TitleAddTasks.textContent = 'Create a new task';
        liItemTitle1.appendChild(h1TitleAddTasks);
        var liItemTitle2 = crEl('li');
        liItemTitle2.className = 'item-title';
        var h2TitleAddTasks = crEl('h2');
        h2TitleAddTasks.textContent = 'Create a brief description of your task';
        liItemTitle2.appendChild(h2TitleAddTasks);
        ulTitleAddTasks.appendChild(liItemTitle1);
        ulTitleAddTasks.appendChild(liItemTitle2);
        var navBtnClose = crEl('nav');
        navBtnClose.id = 'btn-close';
        var buttonBtnCloseAddTask = crEl('button');
        buttonBtnCloseAddTask.className = 'btn-close';
        buttonBtnCloseAddTask.setAttribute('onclick', "showModals('addTasks')");
        buttonBtnCloseAddTask.addEventListener('click', addTask);
        navBtnClose.appendChild(buttonBtnCloseAddTask);
        headerNavBarAddTasks.appendChild(ulTitleAddTasks);
        headerNavBarAddTasks.appendChild(navBtnClose);
        var sectionContentAddTaskList = crEl('section');
        sectionContentAddTaskList.id = 'content-add-task-list';
        var ulAddTaskList = crEl('ul');
        ulAddTaskList.id = 'add-task-list';
        sectionContentAddTaskList.appendChild(ulAddTaskList);
        var buttonAddTask = crEl('button');
        buttonAddTask.id = 'add-task';
        buttonAddTask.textContent = 'Add Task';
        buttonAddTask.addEventListener('click', addNewTask);
        mainContentAddTasks.appendChild(headerNavBarAddTasks);
        mainContentAddTasks.appendChild(sectionContentAddTaskList);
        mainContentAddTasks.appendChild(buttonAddTask);
        sectionAddTasks.appendChild(mainContentAddTasks);
        document.body.appendChild(sectionAddTasks);
      } else {
        document.body.removeChild(elSel('#add-tasks'));
        addTasks.showModal = false;
      }

      break;
  }
};