import React from 'react'
import classes from './Task.module.css'

const Task = props => {
  function handleEditClick () {
    props.setOpen(true)
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

  function onChangeCheckbox() {
    props.setTaskCompleted(props.id)
  }

  return (
    <div className={classes.todoItem}>
      <div className={classes.test}>
        <input
          type="checkbox"
          className={classes.checkbox}
          checked={props.completed}
          onChange={onChangeCheckbox}
        ></input>
        <div className={classes.todoItemText}>{props.title}</div>
        <i className={`fa-solid fa-pencil ${classes.editIcon}`} title="Edit Task" onClick={handleEditClick}></i>
        <i className={`fa-solid fa-trash-can ${classes.removeIcon}`} title="Remove Task" onClick={handleRemoveClick}></i>
      </div>
      <div className={classes.todoDescription}>{props.description}</div>
    </div>
  )
}

export default Task;