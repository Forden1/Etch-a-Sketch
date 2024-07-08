document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector("#grid");
    let n = 16; 

    drawgrid(n);

    function drawgrid(n) {
        grid.innerHTML = ''; 
        const cellSize = 640 / n;
        
        for (let i = 0; i < n; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < n; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.style.width = `${cellSize}px`;
                cell.style.height = `${cellSize}px`;
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        addEventListeners();
    }

    function addEventListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = 'coral';
                cell.style.transform = 'scale(1.1)';
            });

            cell.addEventListener('mouseleave', () => {
                cell.style.backgroundColor = 'lightblue';
                cell.style.transform = 'scale(1)';
            });
        });
    }

    window.startB = function() {
        let n = prompt("Please provide a number (max 100)");
        if (n > 0 && n <= 100) {
            drawgrid(n);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
    window.resetB = function() {
        drawgrid(n)
    }
});