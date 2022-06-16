import React from 'react'
import classes from './TaskWindow.module.css'
import axios from 'axios'

const TaskWindow = props => {
  function handleCancelButton() {
    props.setOpen(false)
  }
  async function handleSaveButton() {
    props.setOpen(false)
    const title = props.task.title
    const body = props.task.body
    let id = props.task.id
    if (title == '' && body == '') {
      return
    }
    if (props.mode === 'edit') {
      await axios.patch(`https://react-todolist-97133-default-rtdb.firebaseio.com/todo/${id}.json`, { title, body, id })
      props.onEdit({ title, body, id })
    } else {
      const { data: { name } } = await axios.post(`https://react-todolist-97133-default-rtdb.firebaseio.com/todo.json`, { title, body })
      props.onSave({ title, body, id: name })
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