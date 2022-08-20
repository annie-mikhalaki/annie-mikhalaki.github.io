import todoAPI from './todoAPI'

describe('todoAPI', () => {
    describe('getTodoItem', () => {
        it('should be defined function', () => {
            expect(todoAPI.getTodoItem).toBeDefined()
            expect(typeof todoAPI.getTodoItem).toEqual('function')
        })
    })

    describe('getAllTodoItems', () => {
        it('should be defined function', () => {
            expect(todoAPI.getAllTodoItems).toBeDefined()
            expect(typeof todoAPI.getAllTodoItems).toEqual('function')
        })
    })

    describe('createTodoItem', () => {
        it('should be defined function', () => {
            expect(todoAPI.createTodoItem).toBeDefined()
            expect(typeof todoAPI.createTodoItem).toEqual('function')
        })
    })

    describe('completeTodoItem', () => {
        it('should be defined function', () => {
            expect(todoAPI.completeTodoItem).toBeDefined()
            expect(typeof todoAPI.completeTodoItem).toEqual('function')
        })
    })

    describe('updateTodoItem', () => {
        it('should be defined function', () => {
            expect(todoAPI.updateTodoItem).toBeDefined()
            expect(typeof todoAPI.updateTodoItem).toEqual('function')
        })
    })

    describe('deleteAllTodoItems', () => {
        it('should be defined function', () => {
            expect(todoAPI.deleteAllTodoItems).toBeDefined()
            expect(typeof todoAPI.deleteAllTodoItems).toEqual('function')
        })
    })

    describe('deleteTodoItem', () => {
        it('should be defined function', () => {
            expect(todoAPI.deleteTodoItem).toBeDefined()
            expect(typeof todoAPI.deleteTodoItem).toEqual('function')
        })
    })
})
