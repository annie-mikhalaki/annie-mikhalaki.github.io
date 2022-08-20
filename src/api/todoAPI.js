/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const firebase = 'https://react-todolist-97133-default-rtdb.firebaseio.com'

const api = baseURL => axios.create({ baseURL })

const getTodoItem = itemId => api(firebase)
    .get(`todo/${itemId}.json`)
    .then(response => response)
    .catch(error => console.error(error))

const getAllTodoItems = () => api(firebase)
    .get('todo.json')
    .then(response => response)
    .catch(error => console.error(error))

const createTodoItem = item => api(firebase)
    .post('todo.json', item)
    .then(response => response)
    .catch(error => console.error(error))

const updateTodoItem = (item) => api(firebase)
    .patch(`todo/${item.id}.json`, item)
    .then(response => response)
    .catch(error => console.error(error))

const completeTodoItem = (itemId, completed) => api(firebase)
    .patch(`/todo/${itemId}.json`, { completed })
    .then(response => response)
    .catch(error => console.error(error))

const deleteTodoItem = itemId => api(firebase)
    .delete(`todo/${itemId}.json`)
    .then(response => response)
    .catch(error => console.error(error))

const deleteAllTodoItems = () => api(firebase)
    .put('/todo.json', {})
    .then(response => response)
    .catch(error => console.error(error))

export default {
    getTodoItem,
    getAllTodoItems,
    createTodoItem,
    completeTodoItem,
    updateTodoItem,
    deleteAllTodoItems,
    deleteTodoItem
}
