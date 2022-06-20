import React from 'react'
import classes from './Task.module.css'

const Task = props => {
  function handleEditClick () {
    props.setOpen(true)
    props.setMode('edit')
    props.setSelectedTask({
      id: props.id,
      title: props.title,
      body: props.description,
      completed: props.completed
    })
  }

  function handleRemoveClick() {
    props.setOpenRemoveWindow(true)
    props.setSelectedTask({
      id: props.id
    })
  }

  async function handleCompletedClick() {
    props.setTaskCompleted({ id: props.id, completed: props.completed})
  }

  let todoItemClasses = [classes.todoItem];
  let checkIconTitle;
  props.completed && todoItemClasses.push(classes.completedItem)
  checkIconTitle = props.completed ? 'Do you want to restore this task?' : 'Do you want to complete this task?'
  

  return (
    <div className={todoItemClasses.join(' ')}>
      <div className={classes.todoItemContent}>
        <input
          type="checkbox"
          className={classes.checkbox}
        ></input>
        <div className={classes.todoItemText}>{props.title}</div>
        <span className={classes.todoItemToolbar}>
          <i className={`fa-solid fa-circle-check ${classes.checkIcon}`} title={checkIconTitle} onClick={handleCompletedClick}></i>
          <i className={`fa-solid fa-pencil ${classes.editIcon}`} title="Edit Task" onClick={handleEditClick}></i>
          <i className={`fa-solid fa-trash-can ${classes.removeIcon}`} title="Remove Task" onClick={handleRemoveClick}></i>
        </span>
      </div>
      <div className={classes.todoDescription}>{props.description}</div>
    </div>
  )
}

export default Task;