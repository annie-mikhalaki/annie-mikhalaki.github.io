import React, { useState, useEffect } from 'react'
import classes from './Todo.module.css'
import Task from '../Task/Task'
import TaskWindow from '../TaskWindow/TaskWindow'
import RemoveTaskWindow from '../RemoveTaskWindow/RemoveTaskWindow'
import Loader from '../Loader/Loader'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../../actions/visibilityFilters'
import { filterTasks } from '../../utilities/filterUtilities'
import axios from 'axios'

const defaultState = {
  title: '',
  body: '',
  completed: false
}

const Todo = props => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('create'); // edit || create
  const { list, loading, filteredList, visibilityFilter, addTodo, editTodo } = props;
  const [selectedTask, setSelectedTask] = useState(defaultState)
  const [openRemoveWindow, setOpenRemoveWindow] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://react-todolist-97133-default-rtdb.firebaseio.com/todo.json')
      const  list = Object.keys(response.data).map(key => {
        return {
          ...response.data[key],
          id: key
        }
      })
      props.setList(list)
      props.setLoading(false)
    }
    fetchData().catch(console.error);
  }, [])

  function handleChangeTitle(event) {
    setSelectedTask({
      ...selectedTask,
      title: event.target.value
    })
  }

  function handleChangeBody(event) {
    setSelectedTask({
      ...selectedTask,
      body: event.target.value
    })
  }

  function onClickAddButton() {
    setSelectedTask(defaultState)
    setMode('create')
    setOpen(true)
  }

  function onRemoveAll() {
    props.deleteList()
  }

  function sortByFilter({ target: { value } }) {
    props.setVisibilityFilter(value)
    let sortedList;
    switch(value) {
      case SHOW_ALL:
        props.setList(list)
        break
      case SHOW_COMPLETED:
        sortedList = filterTasks(list, value)
        props.setFilterList(sortedList)
        break
      case SHOW_UNCOMPLETED:
        sortedList = filterTasks(list, value)
        props.setFilterList(sortedList)
        break
      default:
        break
    }
  }
  
  const displayList = (visibilityFilter === SHOW_ALL) ? list : filteredList

  return (
    <div className={classes.Todo}>
      <div className={classes.todoHeader}>
        <div className={classes.todoTitle}>List of Tasks</div>
        <div className={classes.addButton} onClick={onClickAddButton}>
          <i className="fa-solid fa-plus"></i>
          <div>Create Task</div>
        </div>
      </div>
      <div className={classes.hrLine}></div>
      <div className={classes.Toolbar}>
        <div className={classes.taskFilter}>
          <select name="filters" onChange={sortByFilter}>
            <option value={SHOW_ALL} >Show all</option>
            <option value={SHOW_COMPLETED}>Show completed</option>
            <option value={SHOW_UNCOMPLETED}>Show uncompleted</option>
          </select>
        </div>
        <button className={classes.button} onClick={props.sortTasks} title="Sort tasks">
          <i className="fa-solid fa-arrow-down-a-z"></i>
        </button>
        <button className={classes.button + ' ' + classes.error} onClick={onRemoveAll}>Clean all</button>
      </div>
      { loading ? 
        <Loader /> :
        <div className={classes.todoItems}>
          { 
            displayList.length > 0 ?
            displayList.map((item, index) => {
              return (
                <Task
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.body}
                  completed={item.completed}
                  setOpen={setOpen}
                  setOpenRemoveWindow={setOpenRemoveWindow}
                  setSelectedTask={setSelectedTask}
                  setMode={setMode}
                  setTaskCompleted={props.setTaskCompleted}
                  selectedTask={selectedTask}
                >
                </Task>
              )
            })
                : <div>Your task list is empty</div>
          }
        </div>
      }
      {
        open ?
          <TaskWindow
            onSave={addTodo}
            onEdit={editTodo}
            setOpen={setOpen}
            mode={mode}
            task={selectedTask}
            list={list}
            handleChangeTitle={handleChangeTitle}
            handleChangeBody={handleChangeBody}
        /> :
          null
      }
      {
        openRemoveWindow ?
          <RemoveTaskWindow
            setOpenRemoveWindow={setOpenRemoveWindow}
            onRemoveTask={props.removeTodo}
            selectedTask={selectedTask}
          /> :
          null
      }
    </div>
  )
}

export default Todo