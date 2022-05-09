const gridContainer = document.querySelector('.grid-container');
const gridSize = 16;
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

function createGrid(size) {
    for (let i = 0; i < gridSize; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-square');
        // gridColumn.textContent = (i + 1);
        gridContainer.appendChild(gridColumn);
        for (let j = 1; j < gridSize; j++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-square');
            // gridRow.textContent = (j + 1);
            gridContainer.appendChild(gridRow);
        }
    }
}

createGrid(gridSize);