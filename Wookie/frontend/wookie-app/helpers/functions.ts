
// Efficient way to randomize
// Fisher-Yates Algorithm
export function randomize(tab) {

    for (let i: number = (tab.length - 1); 0 < i; i-- ) {
        const j :  number = Math.floor(Math.random() * i)
        const temp : object  = tab[i]
        tab[i] = tab[j]
        tab[j] = temp
    }

    return tab
}


