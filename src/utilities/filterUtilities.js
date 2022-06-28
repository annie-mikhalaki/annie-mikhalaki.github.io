import {SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../actions/visibilityFilters'

export const filterTasks = (list, filter) => {
    if (filter === SHOW_COMPLETED) {
        return list.filter(item => item.completed)
    }
    if (filter === SHOW_UNCOMPLETED) {
        return list.filter(item => !item.completed)
    }
    return list
}