import {
  SET_LIST,
  REMOVE_TASKS,
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK, 
  REMOVE_TASK,
  REMOVE_MARKED_TASKS,
  SET_LOADING,
  SET_FILTER_LIST,
  SET_VISIBILITY_FILTER,
  SET_SORT_ORDER
} from '../actions/actionTypes'
import {SHOW_ALL} from '../actions/visibilityFilters'
import { CREATION_DATE_ASC } from '../actions/sorting'

const initialState = {
  list: [],
  filteredList: [],
  visibilityFilter: SHOW_ALL,
  loading: true,
  sortOrder: CREATION_DATE_ASC
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      }
    case REMOVE_TASKS:
      return {
        ...state,
        list: []
      }
    case REMOVE_MARKED_TASKS:
      return {
        ...state,
        list: state.list.filter(item => action.payload.findIndex(id => id === item.id) === -1)
      }
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, {...action.newTask, completed: false}],
        filteredList: [...state.filteredList, {...action.newTask, completed: false}]
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
        list: state.list.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item),
        filteredList: state.filteredList.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.sortOrder,
        // filteredList: action.sortedList
      }
    // case SORT_TASKS_BY_CREATION_DATE:
    //   const { sortOrder } = state
    //   const sortedList = sortList(state.list)
    //   const filteredList = sortList(filterTasks(state.list, state.visibilityFilter))
    //   return {
    //     ...state,
    //     list: sortedList,
    //     filteredList,
    //     sortOrder: sortOrder === CREATION_DATE_DESC ? CREATION_DATE_ASC : CREATION_DATE_DESC
    //   }
    case SET_FILTER_LIST:
      return {
        ...state,
        filteredList: action.filteredList
      }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload
      }
    default:
      return state;
  }
}