import {SET_LIST, ADD_TASK, EDIT_TASK, REMOVE_TASK, COMPLETE_TASK, SORT_TASKS} from './actionTypes'

export function addTask(payload) {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: payload.title,
      body: payload.body,
      id: payload.id,
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
  return {
    type: ADD_TASK,
    payload
  }
}

export function setList(payload) {
  return {
    type: SET_LIST,
    payload
  }
}

export function editTask(payload) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: payload.id,
      title: payload.title,
      body: payload.body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
  return {
    type: EDIT_TASK,
    payload
  }
}

export function removeTask(payload) {
  fetch (`https://jsonplaceholder.typicode.com/todos/${payload}`, {
    method: 'DELETE',
  });
  return {
    type: REMOVE_TASK,
    payload
  }
}

export function completeTask(payload) {
  return {
    type: COMPLETE_TASK,
    payload
  }
}

export function sortTasks() {
  return {
    type: SORT_TASKS
  }
}