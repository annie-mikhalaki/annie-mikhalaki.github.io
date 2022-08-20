import todoReducer from './todo'

describe("todoReducer", () => {
    it('should be defined function', () => {
        expect(todoReducer).toBeDefined()
        expect(typeof todoReducer).toEqual('function')
    })
});