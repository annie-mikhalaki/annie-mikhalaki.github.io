import React from 'react'
import classes from './TaskWindow.module.css'

const TaskWindow = props => {
  function handleCancelButton() {
    props.setOpen(false)
  }
  function handleSaveButton() {
    props.setOpen(false)
    const title = props.task.title
    const body = props.task.body
    let id = props.task.id
    if (title == '' && body == '') {
      return
    }
    if (id) {
      props.onEdit({ title, body, id })
    } else {
      id = props.list.length + 1
      props.onSave({ title, body, id })
    }
  }
  return (
    <div
      className={classes.TodoWindow}
    >
      <div className={classes.todoForm}>
        <label>Text
          <textarea
            value={props.task.title}
            rows="3"
            onChange={props.handleChangeTitle}
          />
        </label>
        <label>Description
          <textarea
            value={props.task.body}
            rows="7"
            onChange={props.handleChangeBody}
          />
        </label>
        <div className={classes.taskButtons}>
          <button
            className={classes.button}
            onClick={handleCancelButton}
          >Cancel</button>
          <button
            className={classes.button+ ' ' + classes.success}
            onClick={handleSaveButton}
          >Save</button>
        </div>
      </div>
    </div>
  )
}

export default TaskWindow