const gridContainer = document.querySelector('.grid');
const gridSize = 16;
function makeGrid(size){
    for (let i = 0; i < size; i++){
        const gridColumn = document.createElement('div');
        gridColumn.className = "grid-column";
        for (let j = 0; j < size; j++){
            const gridBox = document.createElement('div');
            gridBox.className = "grid-row";
            gridBox.textContent = (j + 1);
            gridColumn.appendChild(gridBox);
        }
        gridContainer.appendChild(gridColumn);
    }
};

makeGrid(gridSize);