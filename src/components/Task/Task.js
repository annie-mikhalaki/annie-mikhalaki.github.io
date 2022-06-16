import React from 'react'
import classes from './Task.module.css'

const Task = props => {
  function handleEditClick () {
    props.setOpen(true)
    props.setMode('edit')
    props.setSelectedTask({
      id: props.id,
      title: props.title,
      body: props.description
    })
  }

  function handleRemoveClick() {
    props.setOpenRemoveWindow(true)
    props.setSelectedTask({
      id: props.id
    })
  }

  function handleCompletedClick() {
    props.setTaskCompleted(props.id)
  }

  return (
    <div className={classes.todoItem}>
      <div className={classes.test}>
        <input
          type="checkbox"
          className={classes.checkbox}
          // checked={props.completed}
          // onChange={onChangeCheckbox}
        ></input>
        <div className={classes.todoItemText}>{props.title}</div>
        <span className={classes.todoItemToolbar}>
          <i className={`fa-solid fa-circle-check ${classes.checkIcon}`} title="Do you want to complete this task?" onClick={handleCompletedClick}></i>
          <i className={`fa-solid fa-pencil ${classes.editIcon}`} title="Edit Task" onClick={handleEditClick}></i>
          <i className={`fa-solid fa-trash-can ${classes.removeIcon}`} title="Remove Task" onClick={handleRemoveClick}></i>
        </span>
      </div>
      <div className={classes.todoDescription}>{props.description}</div>
    </div>
  )
}

export default Task;