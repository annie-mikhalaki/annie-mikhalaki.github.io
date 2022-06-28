import React from 'react'
import classes from './RemoveTaskWindow.module.css'

const RemoveTaskWindow = props => {
  function handleCancelButton() {
    props.setOpenRemoveWindow(false)
  }

  function handleRemoveButton() {
    props.setOpenRemoveWindow(false)
    props.onRemoveTask(props.selectTaskForEdit.id)
  }

  return (
    <div className={classes.RemoveWindow}>
      <div className={classes.todoForm}>
        <span>Do you want to remove this task?</span>
        <div className={classes.taskButtons}>
          <button
            className={classes.button}
            onClick={handleCancelButton}
          >Cancel</button>
          <button
            className={classes.button+ ' ' + classes.error}
            onClick={handleRemoveButton}
          >Remove</button>
        </div>
      </div>
    </div>
  )
}

export default RemoveTaskWindow