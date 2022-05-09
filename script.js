const gridContainer = document.querySelector('.grid-container');
let gridSize = 16;
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

function createGrid(size) {
    for (let i = 0; i < size; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-square');
        // gridColumn.textContent = (i + 1);
        gridContainer.appendChild(gridColumn);
        for (let j = 1; j < size; j++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-square');
            // gridRow.textContent = (j + 1);
            gridContainer.appendChild(gridRow);
        }
        const gridSquare = document.querySelectorAll('.grid-square');
        for (let i = 0; i < gridSquare.length; i++) {
            gridSquare[i].addEventListener('mouseover', function() {
                gridSquare[i].classList.add('active');
            });
        }
    }
}

createGrid(gridSize);

const gridSizeSliderValue = document.querySelector('#grid-size');
gridSizeSliderValue.addEventListener('change', function() {
    gridContainer.innerHTML = "";

    gridSize = gridSizeSliderValue.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    console.log(gridSize);
    createGrid(gridSize);
});

