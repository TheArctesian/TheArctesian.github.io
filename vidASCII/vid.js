/*
This top script just loads the video into the video tag
*/
var txt = document.getElementById("txt");
var fileInput = document.querySelector('input[type="file"');
console.log(fileInput);

$(document).on("change", ".file_multi_video", function (evt) {
    try {
        var $source = $('#video_here');
        $source[0].src = URL.createObjectURL(this.files[0]);
        $source.parent()[0].load();
        console.log("ran script");
        txt.textContent = "Your Video:";
    }
    catch (error) {
        console.log(error);
        txt.textContent = "File type not supported"
    }
});