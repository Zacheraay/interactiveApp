var click;
var count = 0;
var color = 'red';
var colorPalette = ["red", "orange", "yellow", "green", "blue", "purple"]


function createGrid() {
    var grid = document.getElementById("grid");
    grid.addEventListener('mousedown', (event) => {
        click = true;
    });
    grid.addEventListener('mouseup', (event) => {
        click = false;
    });
    for(var i = 0; i < 50; i++) {
        for(var j = 0; j < 50; j++) {
            var box = document.createElement("box");
            box.setAttribute("class", "unit");
            box.setAttribute("id", i+","+j);
            box.style.left = i*16+"px";
            box.style.top = j*16+"px";
            box.addEventListener('mouseover', (event) => {
                if(click){
                    changeColor(event);
                }

            });
            grid.appendChild(box);
        }
    }
    changePalette();
}


function changePalette() {
    document.addEventListener('dblclick', (event) => {
        for(var i = 4; i >= 0; i--) {
            if(color = colorPalette[i]) {
                color = colorPalette[i+1];
            } else {
                color = colorPalette[0];
            }
        }
    });
}

function changeColor(event) {
    let cell = event.target;
    cell.style.background = color;
}
