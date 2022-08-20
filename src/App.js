import React from 'react'
import { connect } from 'react-redux'
import Todo from './components/Todo/Todo'
import {
    setList,
    deleteList,
    addTask,
    editTask,
    removeTask,
    removeMarkedTasks,
    completeTask,
    setLoading,
    setSortOrder,
    setFilterList,
    setVisibilityFilter,
} from './actions/taskActions'

function App(props) {
    const {
        setList,
        deleteList,
        list,
        filteredList,
        visibilityFilter,
        loading,
        sortOrder,
        addTodo,
        editTodo,
        setTaskCompleted,
        removeTodo,
        removeMarkedTasks,
        setLoading,
        setSortOrder,
        setFilterList,
        setVisibilityFilter,
    } = props
    return (
        <div className="App">
            <Todo
                setList={setList}
                deleteList={deleteList}
                addTodo={addTodo}
                editTodo={editTodo}
                list={list}
                sortOrder={sortOrder}
                filteredList={filteredList}
                visibilityFilter={visibilityFilter}
                loading={loading}
                setTaskCompleted={setTaskCompleted}
                removeTodo={removeTodo}
                removeMarkedTasks={removeMarkedTasks}
                setLoading={setLoading}
                setSortOrder={setSortOrder}
                setFilterList={setFilterList}
                setVisibilityFilter={setVisibilityFilter}
            ></Todo>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        filteredList: state.filteredList,
        loading: state.loading,
        visibilityFilter: state.visibilityFilter,
        sortOrder: state.sortOrder,
    }
}

const mapDispatchToProps = dispatch => ({
    setList: payload => dispatch(setList(payload)),
    deleteList: () => dispatch(deleteList()),
    addTodo: payload => dispatch(addTask(payload)),
    editTodo: payload => dispatch(editTask(payload)),
    removeTodo: payload => dispatch(removeTask(payload)),
    removeMarkedTasks: payload => dispatch(removeMarkedTasks(payload)),
    setTaskCompleted: payload => dispatch(completeTask(payload)),
    setLoading: payload => dispatch(setLoading(payload)),
    setSortOrder: payload => dispatch(setSortOrder(payload)),
    setFilterList: payload => dispatch(setFilterList(payload)),
    setVisibilityFilter: payload => dispatch(setVisibilityFilter(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
