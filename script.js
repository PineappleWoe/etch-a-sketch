const gridContainer = document.querySelector('.grid-container');
let gridSize = 16;
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

const etchSketch = document.querySelector('.etch-a-sketch');
let gridValueGuide = document.createElement('p');
gridValueGuide.textContent = `${gridSize} X ${gridSize}`;
etchSketch.insertBefore(gridValueGuide, gridContainer);



// Grid - Main Function
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
        // Enable Drawing for Generated Squares
        let gridSquare = document.querySelectorAll('.grid-square');
        let gridColor = document.querySelector('#grid-color');
        for (let i = 0; i < gridSquare.length; i++) {
            gridSquare[i].addEventListener('mouseover', function() {
                gridSquare[i].style.backgroundColor = `${gridColor.value}`;
            });
        }
    }
}

createGrid(gridSize);

// Grid Size
const gridSizeSliderValue = document.querySelector('#grid-size');
gridSizeSliderValue.addEventListener('change', function() {
    gridContainer.innerHTML = "";

    gridSize = gridSizeSliderValue.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    gridValueGuide.textContent = `${gridSize} X ${gridSize}`;
    createGrid(gridSize);
});

// Hide/Show Grid Borders
const hideShowButton = document.querySelector('#hide-show');
hideShowButton.addEventListener('click', function() {
    const gridBorders = document.querySelectorAll('.grid-square');
    for (let i = 0; i < gridBorders.length; i++){
        if (gridBorders[i].classList.contains('hide')){
            gridBorders[i].classList.remove('hide');
            hideShowButton.textContent = "Hide Grid Borders";
        } else {
            gridBorders[i].classList.add('hide');
            hideShowButton.textContent = "Show Grid Borders";
        }
    }
});
