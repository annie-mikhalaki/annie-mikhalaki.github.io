import './App.css';
import {connect} from 'react-redux'
import Todo from './components/Todo/Todo'
import React from 'react'
import {setList, deleteList, addTask, editTask, removeTask, completeTask, sortTasks} from './actions/taskActions'

function App(props) {
  const { setList, deleteList, list, addTodo, editTodo, setTaskCompleted, removeTodo, sortTasks } = props
  return (
    <div className="App">
      <Todo
        setList={setList}
        deleteList={deleteList}
        addTodo={addTodo}
        editTodo={editTodo}
        list={list}
        setTaskCompleted={setTaskCompleted}
        removeTodo={removeTodo}
        sortTasks={sortTasks}
      >
      </Todo>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => ({
  setList: payload => dispatch(setList(payload)),
  deleteList: () => dispatch(deleteList()),
  addTodo: payload => dispatch(addTask(payload)),
  editTodo: payload => dispatch(editTask(payload)),
  removeTodo: payload => dispatch(removeTask(payload)),
  setTaskCompleted: payload => dispatch(completeTask(payload)),
  sortTasks: () => dispatch(sortTasks())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
