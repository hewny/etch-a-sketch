container = document.querySelector('div')
input = 16

function drawGrid() {
    // delete all divs
    grid = document.querySelector('.container');
    grid.querySelectorAll('.box').forEach(box => box.remove());

    // create new divs
    for (var i=0; i < input**2; i++) {
        newDiv = document.createElement('div');
        newDiv.id = 1+i;
        newDiv.className='box';
        newDiv.style.opacity = 1;
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', addBackground);
    }

    // update grid columns and rows
    r = document.querySelector(':root');
    r.style.setProperty('--value', input)

    // add event listeners for hover
    boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.addEventListener('mouseover', addBackground));
    }

function addBackground(e) {
    e.target.style.backgroundColor = 'black';
    // e.target.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(e.target.style.opacity)
    e.target.style.opacity -= 0.1;
    console.log(e.target.style.opacity)
}

function removeBackground() {

    input = prompt("Please enter an integer between 1-100 for the new grid.");
    input = parseInt(input)

    if (input != NaN && input > 0 && input <= 100) {
        boxes.forEach (box => box.style.backgroundColor='');
        drawGrid();
    }
    else {alert('Please enter a valid number')}
}

drawGrid();

