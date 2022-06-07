import {SET_LIST, ADD_TASK, COMPLETE_TASK, EDIT_TASK, REMOVE_TASK, SORT_TASKS} from '../actions/actionTypes'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../actions/visibilityFilters'

const initialState = {
  // list: [
    // {
    //   id: 1,
    //   title: 'To do something 1',
    //   body: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст',
    //   completed: true
    // },
    // {
    //   id: 2,
    //   title: 'To do something 2',
    //   body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   completed: false
    // },
    // {
    //   id: 3,
    //   title: 'To do something 3',
    //   body: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
    //   completed: true
    // }
  // ],
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
        list: action.payload.map(item => ({...item, body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}))
      }
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, {...action.payload, completed: false}]
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