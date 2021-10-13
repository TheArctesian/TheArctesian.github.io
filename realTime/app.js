(function () {
    var asciiContainer = document.getElementById("ascii");
    var capturing = false;

    camera.init({
        width: 160,
        height: 120,
        fps: 30,
        mirror: true,

        onFrame: function (canvas) {
            ascii.fromCanvas(canvas, {
                // contrast: 128,
                callback: function (asciiString) {
                    asciiContainer.innerHTML = asciiString;
                }
            });
        },

        onSuccess: function () {
            document.getElementById("info").style.display = "none";

            const button = document.getElementById("button");
            button.style.display = "block";
            button.onclick = function () {
                if (capturing) {
                    camera.pause();
                    button.innerText = 'resume';
                } else {
                    camera.start();
                    button.innerText = 'pause';
                }
                capturing = !capturing;
            };
        },

        onError: function (error) {
            // TODO: log error
        },

        onNotSupported: function () {
            document.getElementById("info").style.display = "none";
            asciiContainer.style.display = "none";
            document.getElementById("notSupported").style.display = "block";
        }
    });
})();
var i = 1;
function Mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(i % 2 == 0){
        document.getElementById("butthehe").innerText = "Set light mode";
        console.log("Dark mode");
    }
    else if(i % 2 == 1){
        document.getElementById("butthehe").innerText = "Set dark mode";
        console.log("Light mode");
    }
    i++;
}