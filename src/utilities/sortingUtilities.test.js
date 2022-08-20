import { sortTasksByTitleASC, sortTasksByTitleDESC, sortTasksByDateASC, sortTasksByDateDESC } from './sortingUtilities'

describe('sortingUtilities', () => {
    describe('sortTasksByTitleASC', () => {
        it('should return tasks in ASC order', () => {
            expect(sortTasksByTitleASC([{ title: 'Eva' }, { title: 'Bongo' }, { title: 'Anna' }])).toEqual([
                { title: 'Anna' },
                { title: 'Bongo' },
                { title: 'Eva' },
            ])
        })
    })

    describe('sortTasksByTitleDESC', () => {
        it('should return tasks in DESC order', () => {
            expect(sortTasksByTitleDESC([{ title: 'Anna' }, { title: 'Bongo' }, { title: 'Eva' }])).toEqual([
                { title: 'Eva' },
                { title: 'Bongo' },
                { title: 'Anna' },
            ])
        })
    })

    describe('sortTasksByDateASC', () => {
        it('should return tasks in ASC order', () => {
            expect(
                sortTasksByDateASC([
                    { creationDate: 1000, title: 'Eva' },
                    { creationDate: 100, title: 'Bongo' },
                    { creationDate: 10, title: 'Anna' },
                ])
            ).toEqual([
                { creationDate: 10, title: 'Anna' },
                { creationDate: 100, title: 'Bongo' },
                { creationDate: 1000, title: 'Eva' },
            ])
        })
    })

    describe('sortTasksByDateDESC', () => {
        it('should return tasks in DESC order', () => {
            expect(
                sortTasksByDateDESC([
                    { creationDate: 10, title: 'Eva' },
                    { creationDate: 100, title: 'Bongo' },
                    { creationDate: 1000, title: 'Anna' },
                ])
            ).toEqual([
                { creationDate: 1000, title: 'Anna' },
                { creationDate: 100, title: 'Bongo' },
                { creationDate: 10, title: 'Eva' },
            ])
        })
    })
})
