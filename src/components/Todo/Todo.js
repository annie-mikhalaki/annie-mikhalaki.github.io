import React, { useState, useEffect } from 'react'
import classes from './Todo.module.css'
import Task from '../Task/Task'
import TaskWindow from '../TaskWindow/TaskWindow'
import RemoveTaskWindow from '../RemoveTaskWindow/RemoveTaskWindow'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from '../../actions/visibilityFilters'
import axios from 'axios'

const defaultState = {
  id: '',
  title: '',
  body: ''
}

const Todo = props => {
  const [open, setOpen] = useState(false);
  const { list, addTodo, editTodo } = props;
  const [selectedTask, setSelectedTask] = useState(defaultState)
  const [openRemoveWindow, setOpenRemoveWindow] = useState(false)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then(result => props.setList(result))
  //   }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(result => console.log(result))
    axios.get('https://react-todolist-97133-default-rtdb.firebaseio.com/todo.json').then(response => {
      console.log(response)
    })
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
    setOpen(true)
  }

  function onRemoveAll() {
    props.setList([])
  }

  function sortByFilter(e) {
    debugger
  }

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
          <select name="select" onChange={sortByFilter}>
            <option value={SHOW_ALL} >Show all</option>
            <option value={SHOW_COMPLETED}>Show completed</option>
            <option value={SHOW_UNCOMPLETED}>Show uncompleted</option>
          </select>
        </div>
        <button className={classes.button} onClick={props.sortTasks} title="Sort tasks">
          <i className="fa-solid fa-sort"></i>
        </button>
        <button className={classes.button + ' ' + classes.error} onClick={onRemoveAll}>Clean all</button>
      </div>
      <div className={classes.todoItems}>
        {
          list.length > 0 ?
          list.map((item, index) => {
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
                setTaskCompleted={props.setTaskCompleted}
                selectedTask={selectedTask}
              >
              </Task>
            )
          })
            : <div>Your task list is empty</div>
        }
      </div>
      {
        open ?
          <TaskWindow
            onSave={addTodo}
            onEdit={editTodo}
            setOpen={setOpen}
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