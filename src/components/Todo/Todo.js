import React, { useState, useEffect } from 'react'
import classes from './Todo.module.css'
import Task from '../Task/Task'
import TaskWindow from '../TaskWindow/TaskWindow'
import RemoveTaskWindow from '../RemoveTaskWindow/RemoveTaskWindow'
import Loader from '../Loader/Loader'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../../actions/visibilityFilters'
import { sortList_ASK, sortList_DESK, sortListByDate_ASK, sortListByDate_DESK } from '../../utilities/sortingUtilities'
import { filterTasks } from '../../utilities/filterUtilities'
import { ALPHABETIC_ASC, ALPHABETIC_DESC, CREATION_DATE_ASC, CREATION_DATE_DESC } from '../../actions/sorting'
import { todoAPI } from '../../api'

const defaultState = {
  title: '',
  body: '',
  completed: false
}

const Todo = props => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('create'); // edit || create
  const [selectedItems, setSelectedItems] = useState([]);
  const { list, loading, filteredList, visibilityFilter, addTodo, editTodo, sortOrder } = props;
  const [selectTaskForEdit, setSelectTaskForEdit] = useState(defaultState)
  const [openRemoveWindow, setOpenRemoveWindow] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await todoAPI.getAllTodoItems()
      if (response.data) {
        const  list = Object.keys(response.data).map(key => {
          return {
            ...response.data[key],
            id: key
          }
        })
        props.setList(list)
      }
      props.setLoading(false)
    }
    fetchData().catch(console.error);
  }, [])

  function handleChangeTitle(event) {
    setSelectTaskForEdit({
      ...selectTaskForEdit,
      title: event.target.value
    })
  }

  function handleChangeBody(event) {
    setSelectTaskForEdit({
      ...selectTaskForEdit,
      body: event.target.value
    })
  }

  function onClickAddButton() {
    setSelectTaskForEdit(defaultState)
    setMode('create')
    setOpen(true)
  }

  function onRemoveAll() {
    props.deleteList()
  }

  function onRemoveMarked() {
    selectedItems.forEach(itemId => {
      todoAPI.deleteTodoItem(itemId)
    })
    props.removeMarkedTasks(selectedItems)
  }

  function setSortOrderByCreationDate() {
    const { sortOrder } = props
    const newOrder = ( sortOrder === CREATION_DATE_ASC ) ? CREATION_DATE_DESC : CREATION_DATE_ASC
    props.setSortOrder({ newOrder })
  }

  function setSortOrderByTitle() {
    const { sortOrder } = props
    const newOrder = ( sortOrder === ALPHABETIC_ASC ) ? ALPHABETIC_DESC : ALPHABETIC_ASC
    props.setSortOrder({ newOrder })
  }

  function getSortedList(sortOrder) {
    const taskList = (visibilityFilter === SHOW_ALL) ? list : filteredList
    switch(sortOrder) {
      case ALPHABETIC_ASC:
        return sortList_ASK(taskList)
      case ALPHABETIC_DESC:
        return sortList_DESK(taskList)
      case CREATION_DATE_ASC:
        return sortListByDate_ASK(taskList)
      case CREATION_DATE_DESC:
        return sortListByDate_DESK(taskList)
      default:
        break
    }
  }

  function sortByFilter({ target: { value } }) {
    props.setVisibilityFilter(value)
    let sortedList;
    switch(value) {
      case SHOW_ALL:
        props.setList(list)
        props.setFilterList(list)
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

  function selectItem ({ target: { checked }}, id) {
    if (checked) {
      setSelectedItems([...selectedItems, id])
    } else {
      setSelectedItems(selectedItems.filter(selectedItemId => selectedItemId !== id))
    }
  }
  
  const sortedList = getSortedList(props.sortOrder)

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
        <div className={classes.buttonGroup}>
          <div className={classes.taskFilter}>
            <select name="filters" onChange={sortByFilter}>
              <option value={SHOW_ALL} >Show all</option>
              <option value={SHOW_COMPLETED}>Show completed</option>
              <option value={SHOW_UNCOMPLETED}>Show uncompleted</option>
            </select>
          </div>
          <button 
            className={classes.button}
            onClick={setSortOrderByTitle}
            title="Sort tasks alphabetically"
            {...(sortOrder === ALPHABETIC_ASC || sortOrder === ALPHABETIC_DESC) && { style: { background: '#d8d7d7' } }}
          >
            By title&nbsp;
            {
              sortOrder === ALPHABETIC_ASC &&
              <i className="fa-solid fa-arrow-down-a-z"></i>
            }
            {
              sortOrder === ALPHABETIC_DESC &&
              <i className="fa-solid fa-arrow-up-a-z"></i>
            }
          </button>
          <button
            className={classes.button}
            onClick={setSortOrderByCreationDate}
            title="Sort tasks by creation date"
            {...(sortOrder === CREATION_DATE_ASC || sortOrder === CREATION_DATE_DESC) && { style: { background: '#d8d7d7' } }}
          >
            By creation date&nbsp;
          {
              sortOrder === CREATION_DATE_ASC &&
              <i className="fa-solid fa-arrow-down-1-9"></i>
            }
            {
              sortOrder === CREATION_DATE_DESC &&
              <i class="fa-solid fa-arrow-down-9-1"></i>
            }
          </button>
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button + ' ' + classes.error} onClick={onRemoveMarked}>Delete marked</button>
          <button className={classes.button + ' ' + classes.error} onClick={onRemoveAll}>Clean all</button>
        </div>
      </div>
      { loading ? 
        <Loader /> :
        <div className={classes.todoItems}>
          { 
            sortedList.length > 0 ?
            sortedList.map((item, index) => {
              return (
                <Task
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.body}
                  completed={item.completed}
                  setOpen={setOpen}
                  setOpenRemoveWindow={setOpenRemoveWindow}
                  setSelectTaskForEdit={setSelectTaskForEdit}
                  setMode={setMode}
                  setTaskCompleted={props.setTaskCompleted}
                  selectTaskForEdit={selectTaskForEdit}
                  selected={selectedItems.findIndex(id => item.id === id) > -1}
                  selectItem={selectItem}
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
            task={selectTaskForEdit}
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
            selectTaskForEdit={selectTaskForEdit}
          /> :
          null
      }
    </div>
  )
}

export default Todo