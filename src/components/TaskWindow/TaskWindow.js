import React from 'react'
import classes from './TaskWindow.module.css'
import { todoAPI } from '../../api'

const TaskWindow = props => {
    function handleCancelButton() {
        props.setOpen(false)
    }
    async function handleSaveButton() {
        props.setOpen(false)
        const title = props.task.title
        const body = props.task.body
        const id = props.task.id
        const completed = props.task.completed
        if (title == '' && body == '') {
            return
        }
        if (props.mode === 'edit') {
            const todoItem = { title, body, id, completed }
            await todoAPI.updateTodoItem(todoItem)
            props.onEdit(todoItem)
        } else {
            const todoItem = { title, body, completed, creationDate: new Date().getTime() }
            const {
                data: { name: id },
            } = await todoAPI.createTodoItem(todoItem)
            props.onSave({ ...todoItem, id })
        }
    }
    return (
        <div className={classes.TodoWindow}>
            <div className={classes.todoForm}>
                <label>
                    Text
                    <textarea value={props.task.title} rows="3" onChange={props.handleChangeTitle} />
                </label>
                <label>
                    Description
                    <textarea value={props.task.body} rows="7" onChange={props.handleChangeBody} />
                </label>
                <div className={classes.taskButtons}>
                    <button className={classes.button} onClick={handleCancelButton}>
                        Cancel
                    </button>
                    <button className={classes.button + ' ' + classes.success} onClick={handleSaveButton}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskWindow
