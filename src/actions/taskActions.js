import {SET_LIST, DELETE_TASK, ADD_TASK, EDIT_TASK, REMOVE_TASK, COMPLETE_TASK, SORT_TASKS} from './actionTypes'
import axios from 'axios'

export function addTask(newTask) {
    return {
      type: ADD_TASK,
      newTask
    }
}

export function deleteList() {
  axios.put('https://react-todolist-97133-default-rtdb.firebaseio.com/todo.json', {})
  return {
    type: DELETE_TASK
  }
}

export function setList(payload) {
  return {
    type: SET_LIST,
    payload
  }
}

export function editTask(payload) {
  return {
    type: EDIT_TASK,
    payload
  }
}

export function removeTask(payload) {
  axios.delete(`https://react-todolist-97133-default-rtdb.firebaseio.com/todo/${payload}.json`)
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