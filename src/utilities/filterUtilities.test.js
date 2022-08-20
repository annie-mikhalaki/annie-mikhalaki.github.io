import { filterTasks } from './filterUtilities'
import { SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../actions/visibilityFilters'

describe("filterUtilites", () => {
    let list
    describe('filterTasks', () => {
        it('should return filtered list if array is not empty and filter is SHOW_COMPLETED', () => {
            list = [{ id: 0, completed: true }, { id: 1, completed: false }, { id: 2 }]
            expect(filterTasks(list, SHOW_COMPLETED)).toEqual([{ id: 0, completed: true }])
        })

        it('should return filtered list if array is empty and filter is SHOW_COMPLETED', () => {
            list = []
            expect(filterTasks(list, SHOW_COMPLETED)).toEqual([])
        })

        it('should return empty list if filter is SHOW_COMPLETED but list hasnt completed task', () => {
            list = [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}]
            expect(filterTasks(list, SHOW_COMPLETED)).toEqual([])
        })

        it('should return filtered list if array is not empty and filter is SHOW_UNCOMPLETED', () => {
            list = [{ id: 0, completed: true }, { id: 1, completed: false }, { id: 2 }]
            expect(filterTasks(list, SHOW_UNCOMPLETED)).toEqual([{ id: 1, completed: false }, { id: 2 }])
        })

        it('should return filtered list if array is empty and filter is SHOW_UNCOMPLETED', () => {
            list = []
            expect(filterTasks(list, SHOW_UNCOMPLETED)).toEqual([])
        })

        it('should return empty list if filter is SHOW_UNCOMPLETED but list hasnt uncompleted task', () => {
            list = [{id: 1, completed: true}, {id: 2, completed: true}, {id: 3, completed: true}]
            expect(filterTasks(list, SHOW_UNCOMPLETED)).toEqual([])
        })
    })
});