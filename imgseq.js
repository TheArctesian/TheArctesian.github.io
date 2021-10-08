const timer = ms => new Promise(res => setTimeout(res, ms))

$('#seq').hover(
    async function () {
        for (var i = 1; i < 175; i++) {
            var fra = i;
            // console.log(fra.toString().length);
            if (fra.toString().length == 1) {
                frame = "00" + fra;
            } else if (fra.toString().length == 2) {
                frame = "0" + fra;
            } else if (fra.toString().length == 3) {
                frame = fra;
            }
            var imgSeqAddress = "ultrastable-rain-flip-pngSwq/tokenFlip-video0" + frame + ".png";
            $("#seq").attr("src", imgSeqAddress);
            await timer(1); //because anim is in 24 fps so 60/24 = 2.5 (edit this is so fuking wrong in so many ways)
        }
        console.log("done");
    }
);

$('#coin').hover(
    async function () {
        console.log($(window).width());
        if ($(window).width() >= 1200) {
            for (var i = 1; i < 175; i++) {
                var fra = i;
                // console.log(fra.toString().length);
                if (fra.toString().length == 1) {
                    frame = "00" + fra;
                } else if (fra.toString().length == 2) {
                    frame = "0" + fra;
                } else if (fra.toString().length == 3) {
                    frame = fra;
                }
                var imgSeqAddress = "/UNLTRASTABLE-flip-pngSeq/tokenFlip-video0" + frame + ".png";
                $("#coin").attr("src", imgSeqAddress);
                await timer(0.00001); //because anim is in 24 fps so 60/24 = 2.5
            }
            console.log("done");
        }
        else{
            $("#coin").attr("src", "/UNLTRASTABLE-flip-pngSeq/tokenFlip-video0001.png");
        }
    }
);