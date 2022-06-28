export const sortList_ASK = list => {
    return [...list].sort((a,b) => {
        if (a.title > b.title) {
        return 1;
        }
        if (a.title < b.title) {
        return -1;
        }
        return 0;
    })
}

export const sortList_DESK = list => {
    return [...list].sort((a,b) => {
        if (a.title < b.title) {
            return 1
        }
        if (a.title > b.title) {
            return -1
        }
        return 0
    })
}

export const sortListByDate_ASK = list => {
    return [...list].sort((a, b) => {
        if (a.creationDate > b.creationDate) {
            return 1
        }
        if (a.creationDate < b.creationDate) {
            return -1
        }
        return 0
    })
}

export const sortListByDate_DESK = list => {
    return [...list].sort((a, b) => {
        if (a.creationDate < b.creationDate) {
            return 1
        }
        if (a.creationDate > b.creationDate) {
            return -1
        }
        return 0
    })
}