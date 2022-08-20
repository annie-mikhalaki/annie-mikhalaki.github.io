import { todoAPI } from '../api'

export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const REMOVE_TASKS = 'REMOVE_TASKS'
export const REMOVE_MARKED_TASKS = 'REMOVE_MARKED_TASKS'
export const SET_LIST = 'SET_LIST'
export const SET_LOADING = 'SET_LOADING'
export const SET_FILTER_LIST = 'SET_FILTER_LIST'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_SORT_ORDER = 'SET_SORT_ORDER'

export function addTask(newTask) {
    return {
        type: ADD_TASK,
        newTask,
    }
}

export function deleteList() {
    todoAPI.deleteAllTodoItems()
    return {
        type: REMOVE_TASKS,
    }
}

export function removeMarkedTasks(payload) {
    return {
        type: REMOVE_MARKED_TASKS,
        payload,
    }
}

export function setList(payload) {
    return {
        type: SET_LIST,
        payload,
    }
}

export function editTask(payload) {
    return {
        type: EDIT_TASK,
        payload,
    }
}

export function removeTask(itemId) {
    todoAPI.deleteTodoItem(itemId)
    return {
        type: REMOVE_TASK,
        payload: itemId,
    }
}

export function completeTask(payload) {
    const { id: itemId, completed } = payload
    todoAPI.completeTodoItem(itemId, !completed)
    return {
        type: COMPLETE_TASK,
        payload,
    }
}

export function setSortOrder(payload) {
    return {
        type: SET_SORT_ORDER,
        sortOrder: payload.newOrder,
    }
}

export function setLoading(payload) {
    return {
        type: SET_LOADING,
        payload,
    }
}

export function setFilterList(payload) {
    return {
        type: SET_FILTER_LIST,
        filteredList: payload,
    }
}

export function setVisibilityFilter(payload) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload,
    }
}
