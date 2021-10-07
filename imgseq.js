const timer = ms => new Promise(res => setTimeout(res, ms))

$('#seq').hover(
    function () {
        for (var i = 1; i < 175; i++){
            var fra = i;
            // console.log(fra.toString().length);
            if (fra.toString().length == 1){
                frame = "00"+fra; 
                console.log(frame);
            }
            else if (fra.toString().length == 2){
                frame = "0"+fra;
            }
            else if (fra.toString().length == 3){
                frame = fra;
            }
            console.log(frame);
            var imgSeqAddress = "UNLTRASTABLE-flip-pngSeq/tokenFlip-video0" + frame + ".png";
            $("#seq").attr("src", imgSeqAddress);
            await timer(2.5); //because anim is in 24 fps so 60/24 = 2.5
        }
        console.log("done");
    }
);