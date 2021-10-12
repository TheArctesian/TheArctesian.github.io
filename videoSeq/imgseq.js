const timer = ms => new Promise(res => setTimeout(res, ms))

$('#coin').hover(
    async function () {
        console.log($(window).width());
        if ($(window).width() >= 100) {
            for (var i = 1; i < 175; i++) {
                var fra = i;

                if (fra.toString().length == 1) {
                    frame = "00" + fra;
                } else if (fra.toString().length == 2) {
                    frame = "0" + fra;
                } else if (fra.toString().length == 3) {
                    frame = fra;
                }
                var imgSeqAddress = "/videoSeq/UNLTRASTABLE-flip-pngSeq/tokenFlip-video0" + frame + ".png";
                $("#coin").attr("src", imgSeqAddress);
                await timer(0.00001); 
                console.log($("#coin").attr("src") + "this should be working");
            }
            console.log("done");
        }
        else{
            $("#coin").attr("src", "/videoSeq/UNLTRASTABLE-flip-pngSeq/tokenFlip-video0001.png");
        }
    }
);