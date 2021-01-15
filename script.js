let stpbl1 = document.getElementById("stepbl1");
let stbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stbrdr3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = function() {
    stbrdr1.style.borderBottom = "3px solid white";
}

stpbl1.onmouseout = function() {
    stbrdr1.style.borderBottom = "3px solid black";
}

stpbl2.onmouseover = function() {
    stbrdr2.style.borderBottom = "3px solid white";
}

stpbl2.onmouseout = function() {
    stbrdr2.style.borderBottom = "3px solid black";
}

stpbl3.onmouseover = function() {
    stbrdr3.style.borderBottom = "3px solid white";
}

stpbl3.onmouseout = function() {
    stbrdr3.style.borderBottom = "3px solid black";
}
