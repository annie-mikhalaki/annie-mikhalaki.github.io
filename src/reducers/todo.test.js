import { addTask, setList } from '../actions'
import todoReducer, { initialState } from './todo'

describe('todoReducer', () => {
    let state
    it('should be defined function', () => {
        expect(todoReducer).toBeDefined()
        expect(typeof todoReducer).toEqual('function')
    })

    describe('Test reducers', () => {
        beforeEach(() => {
            state = initialState
        })

        it('should put new task in state.list on addTask action', () => {
            expect(todoReducer(state, addTask({ title: 'to learn react' }))).toHaveProperty('list', [
                { title: 'to learn react', completed: false },
            ])
        })

        it('should put task list in state.list on setList action', () => {
            expect(todoReducer(state, setList([
                { title: 'task1', completed: false },
                { title: 'task2', completed: false },
            ]))).toHaveProperty('list', [
                { title: 'task1', completed: false },
                { title: 'task2', completed: false },
            ])
        })
    })
})
