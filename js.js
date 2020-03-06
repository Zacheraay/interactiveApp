function createGrid() {
    var grid = document.getElementById("grid");

    for(var i = 0; i < 50; i++) {
        for(var j = 0; j < 50; j++) {
            var box = document.createElement("box");
            box.setAttribute("class", "unit");
            box.setAttribute("id", i+","+j)
            box.style.left = i*16+"px";
            box.style.top = j*16+"px";
            grid.appendChild(box);
        }
    }

    overUnit();
}

function overUnit() {
    for(var i = 0; i < 50; i++) {
        for(var j = 0; j < 50; j++) {
            var unit = document.getElementById(i+","+j);
            unit.addEventListener('mouseover', (event) => {
                changeColor(event);
            })
        }
    }
}

function changeColor(event) {
    let cell = event.target;
    cell.style.background = "red";
    overUnit();
}
