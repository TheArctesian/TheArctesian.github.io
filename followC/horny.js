let constrain = 50;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");
let txt = document.getElementById("txt");

function transforms(x, y, el) {
    let img = el.getBoundingClientRect();
    var calcX = -(y - img.y - (img.height / 2)) / constrain;
    var calcY = (x - img.x - (img.width / 2)) / constrain;
    txt.textContent = " rotateX (" + calcX + "deg) " + " rotateY (" + calcY + "deg) " + " x is " + (x) + " y is " + (y);
    if (calcY >= 25) {
        calcY = 25;
    }
    if (calcY <= -20) {
        calcY = -20;
    }

    if (calcX >= 20) {
        calcX = 20;
    }
    if (calcX <= -20) {
        calcX = -20;
    }

    //"Screen (" + window.screen.height + "h" + window.screen.width + "w)";
    return "perspective(100px) " + "   rotateX(" + calcX + "deg) " + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position);
    });
};