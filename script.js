const grid = document.getElementById('grid')


function setupGrids() {
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)'
    grid.style.gridTemplateRows = 'repeat(4, 1fr)'

    let i = 7

    while (i => 0) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-item')
        gridElement.textContent = i
        grid.append(gridElement)
        if (i === 9) {
            i -= 5
        } else if ( i === 6) {
            i -= 5
        } else if (i === 3) {
            i = 0
        } else if ( i === 0) return

        i++
    }
}

setupGrids()