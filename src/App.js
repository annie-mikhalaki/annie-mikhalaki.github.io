import './App.css';
import {connect} from 'react-redux'
import Todo from './components/Todo/Todo'
import React from 'react'
import {
  setList, 
  deleteList, 
  addTask, 
  editTask, 
  removeTask, 
  completeTask, 
  setLoading, 
  sortTasks, 
  setFilterList,
  setVisibilityFilter
} from './actions/taskActions'

function App(props) {
  const { 
    setList, 
    deleteList, 
    list, 
    filteredList, 
    visibilityFilter, 
    loading, 
    addTodo, 
    editTodo, 
    setTaskCompleted, 
    removeTodo, 
    setLoading, 
    sortTasks, 
    setFilterList,
    setVisibilityFilter
  } = props
  return (
    <div className="App">
      <Todo
        setList={setList}
        deleteList={deleteList}
        addTodo={addTodo}
        editTodo={editTodo}
        list={list}
        filteredList={filteredList}
        visibilityFilter={visibilityFilter}
        loading={loading}
        setTaskCompleted={setTaskCompleted}
        removeTodo={removeTodo}
        setLoading={setLoading}
        sortTasks={sortTasks}
        setFilterList={setFilterList}
        setVisibilityFilter={setVisibilityFilter}
      >
      </Todo>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.list,
    filteredList: state.filteredList,
    loading: state.loading,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => ({
  setList: payload => dispatch(setList(payload)),
  deleteList: () => dispatch(deleteList()),
  addTodo: payload => dispatch(addTask(payload)),
  editTodo: payload => dispatch(editTask(payload)),
  removeTodo: payload => dispatch(removeTask(payload)),
  setTaskCompleted: payload => dispatch(completeTask(payload)),
  setLoading: payload => dispatch(setLoading(payload)),
  sortTasks: () => dispatch(sortTasks()),
  setFilterList: payload => (dispatch(setFilterList(payload))),
  setVisibilityFilter: payload => (dispatch(setVisibilityFilter(payload)))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
