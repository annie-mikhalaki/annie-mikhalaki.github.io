import {
  SET_LIST,
  DELETE_TASK, 
  ADD_TASK, 
  EDIT_TASK, 
  REMOVE_TASK, 
  COMPLETE_TASK, 
  SET_LOADING,
  SET_FILTER_LIST,
  SET_VISIBILITY_FILTER,
  SET_SORT_ORDER
} from './actionTypes'
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
  axios.patch(`https://react-todolist-97133-default-rtdb.firebaseio.com/todo/${payload.id}.json`, { completed: !payload.completed })
  return {
    type: COMPLETE_TASK,
    payload
  }
}

export function setSortOrder(payload) {
  return {
    type: SET_SORT_ORDER,
    sortOrder: payload
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
    payload
  }
}

export function setVisibilityFilter(payload) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload
  }
}