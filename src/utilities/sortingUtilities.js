export const sortList = list => {
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