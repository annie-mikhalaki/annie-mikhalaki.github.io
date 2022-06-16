import {SET_LIST, DELETE_TASK, ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK, SORT_TASKS} from '../actions/actionTypes'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../actions/visibilityFilters'

const initialState = {
  list: [],
  visibilityFilter: SHOW_ALL,
  sortedList: [],
  isCreatingWindowOpen: false
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      }
    case DELETE_TASK:
      return {
        ...state,
        list: []
      }
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, {...action.newTask, completed: false}]
      }
    case EDIT_TASK:
      return {
        ...state,
        list: state.list.map(item => item.id === action.payload.id ? {...item, ...action.payload} : item)
      }
    case REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      }
    case COMPLETE_TASK:
      return {
        ...state,
        list: state.list.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
      }
    case SORT_TASKS:
      return {
        ...state,
        list: [...state.list].sort((a,b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        })
      }
    default:
      return state;
  }
}