export const sortTasksByTitleASC = tasks => {
    return [...tasks].sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        }
        return 0
    })
}

export const sortTasksByTitleDESC = tasks => {
    return [...tasks].sort((a, b) => {
        if (a.title < b.title) {
            return 1
        }
        if (a.title > b.title) {
            return -1
        }
        return 0
    })
}

export const sortTasksByDateASC = tasks => {
    return [...tasks].sort((a, b) => {
        if (a.creationDate > b.creationDate) {
            return 1
        }
        if (a.creationDate < b.creationDate) {
            return -1
        }
        return 0
    })
}

export const sortTasksByDateDESC = tasks => {
    return [...tasks].sort((a, b) => {
        if (a.creationDate < b.creationDate) {
            return 1
        }
        if (a.creationDate > b.creationDate) {
            return -1
        }
        return 0
    })
}
