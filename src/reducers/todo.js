import {
  SET_LIST,
  DELETE_TASK,
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK, 
  REMOVE_TASK, 
  SET_LOADING, 
  SORT_TASKS,
  SET_FILTER_LIST,
  SET_VISIBILITY_FILTER
} from '../actions/actionTypes'
import {SHOW_ALL} from '../actions/visibilityFilters'
import { filterTasks } from '../utilities/filterUtilities';

const initialState = {
  list: [],
  filteredList: [],
  visibilityFilter: SHOW_ALL,
  loading: true
};

const sortList = list => {
  return [...list].sort((a,b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
}

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
        list: state.list.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SORT_TASKS:
      const sortedList = sortList(state.list)
      const filteredList = sortList(filterTasks(state.list, state.visibilityFilter))
      return {
        ...state,
        list: sortedList,
        filteredList
      }
    case SET_FILTER_LIST:
      return {
        ...state,
        filteredList: action.payload
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