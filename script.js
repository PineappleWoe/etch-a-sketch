const TEXT_DARK = "#252525"

const gridContainer = document.querySelector('.grid-container');
let gridSize = 16;
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

const etchSketch = document.querySelector('.etch-a-sketch');
let gridValueGuide = document.createElement('p');
    gridValueGuide.style.color = TEXT_DARK;
    gridValueGuide.textContent = `${gridSize} X ${gridSize}`;
    etchSketch.insertBefore(gridValueGuide, gridContainer);



// Grid - Main Function
function createGrid(size) {
    for (let i = 0; i < size; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-square');
        gridContainer.appendChild(gridColumn);
        for (let j = 1; j < size; j++){
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-square');
            gridContainer.appendChild(gridRow);
        }            
    }

    // Enable Drawing for Generated Squares
    let gridSquare = document.querySelectorAll('.grid-square');
    let gridColor = document.querySelector('#grid-color');

    const rainbowButton = document.querySelector('#grid-rainbow');
    rainbowButton.addEventListener('click', function() {
        rainbowButton.classList.add('on');
    });
    gridColor.addEventListener('click', function() {
        rainbowButton.classList.remove('on');
    });

    for (let x = 0; x < gridSquare.length; x++) {

        function setGridColour(square) {
            console.log("Hover");
            if (rainbowButton.classList.contains('on')){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                let gridRainbow = "#" + randomColor;
                gridSquare[x].style.backgroundColor = gridRainbow;
            } else {
                gridSquare[x].style.backgroundColor = `${gridColor.value}`
            }
        }
    
        gridSquare[x].addEventListener('mouseover', setGridColour);
    } 
}

createGrid(gridSize);



// Grid Size
const gridSizeSliderValue = document.querySelector('#grid-size');
gridSizeSliderValue.addEventListener('input', function() {
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

// Reset Grid
const resetButton = document.querySelector('#reset');
const gridsToReset = document.querySelectorAll('.grid-square');

resetButton.addEventListener('click', function() {
    gridsToReset.forEach(function(canvas){
        canvas.style.backgroundColor = "#FFFFFF";
    })
});
