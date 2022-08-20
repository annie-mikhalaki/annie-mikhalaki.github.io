import axios from 'axios'
import {
  SET_LIST,
  REMOVE_TASKS, 
  ADD_TASK, 
  EDIT_TASK, 
  REMOVE_TASK,
  REMOVE_MARKED_TASKS,
  COMPLETE_TASK, 
  SET_LOADING,
  SET_FILTER_LIST,
  SET_VISIBILITY_FILTER,
  SET_SORT_ORDER
} from './actionTypes'
import { todoAPI } from '../api'

export function addTask(newTask) {
    return {
      type: ADD_TASK,
      newTask
    }
}

export function deleteList() {
  todoAPI.deleteAllTodoItems()
  return {
    type: REMOVE_TASKS
  }
}

export function removeMarkedTasks(payload) {
  return {
    type: REMOVE_MARKED_TASKS,
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
  return {
    type: EDIT_TASK,
    payload
  }
}

export function removeTask(itemId) {
  todoAPI.deleteTodoItem(itemId)
  return {
    type: REMOVE_TASK,
    payload: itemId
  }
}

export function completeTask(payload) {
  const { id: itemId, completed } = payload
  todoAPI.completeTodoItem(itemId, !completed)
  return {
    type: COMPLETE_TASK,
    payload
  }
}

export function setSortOrder(payload) {
  return {
    type: SET_SORT_ORDER,
    sortOrder: payload.newOrder
  }
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export function setFilterList(payload) {
  return {
    type: SET_FILTER_LIST,
    filteredList: payload
  }
}

export function setVisibilityFilter(payload) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload
  }
}