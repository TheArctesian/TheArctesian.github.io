var frameSRec = [];
var frame = [];

asciiFrames = [];

var recording = false;
var dontworryaboutthis = 0;

(function () {
    var asciiContainer = document.getElementById("ascii");
    var capturing = false;

    camera.init({
        width: 160,
        height: 120,
        fps: 30,
        mirror: false,

        onFrame: function (canvas) {
            ascii.fromCanvas(canvas, {
                // contrast: 128,
                callback: function (asciiString) {
                    asciiContainer.innerHTML = asciiString;
                    recFrames(asciiContainer);
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
            console.log(error);
            console.log('something did a fuckywucky most likely your camera is not connected');
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
    if (i % 2 == 0) {
        document.getElementById("butthehe").innerText = "Set light mode";
        console.log("Dark mode");
    } else if (i % 2 == 1) {
        document.getElementById("butthehe").innerText = "Set dark mode";
        console.log("Light mode");
    }
    i++;
}

// $('#rec').click(function () {
//     if (dontworryaboutthis % 2 == 0) {
//         $('#rec').css('background-color', "red");
//         console.log('recording');
//         recording = true;
//     } else if (dontworryaboutthis % 2 == 1) {
//         $('#rec').css('background-color', "#fddb3a");
//         console.log("not recording");
//         recording = false;
//     }
//     dontworryaboutthis++;
//     console.log(recording);
// })

// function recFrames(asciiFrames) {
//     console.log("called");
//     console.log(recording);
//     if (recording = true) {
//         frameSRec.push(asciiFrames);
//         console.log("printed" + frameSRec.length());
//     } else if (recording == false) {
//         console.log("not recording");
//         createVideo(frameSRec);
//         frameSRec.length = 0;
//     }
// }
