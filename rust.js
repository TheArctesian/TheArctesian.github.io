const canvas = document.getElementById('preview');
const fileInput = document.querySelector('input[type="file"');
const asciiImage = document.getElementById('ascii');

const context = canvas.getContext('2d');

const togreyScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

const getFontRatio = () => {
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';

    document.body.appendChild(pre);
    const {
        width,
        height
    } = pre.getBoundingClientRect();
    document.body.removeChild(pre);

    return height / width;
};

const fontRatio = getFontRatio();

function changeGreyRamp() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    
    // var textStyle = document.querySelectorAll("pre");
    if (checkBox.checked == true) {
        var greyRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
        text.textContent = "Change greyramp scale, current is: " + greyRamp;
        // textStyle.style.fontSize = "xx-smaller";
        // textStyle.style.lineHeight="1" ;
    } else {
        var greyRamp = " .:-=+*#%@";
        text.textContent = "Change greyramp scale, current is: " + greyRamp;
        // textStyle.style.fontSize = "large";
        // textStyle.style.lineHeight = "1.6";
    }
    return greyRamp;
}
var greyRamp = changeGreyRamp();
console.log(greyRamp);

const convertTogreyScales = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);

    const greyScales = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];

        const greyScale = togreyScale(r, g, b);
        imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = greyScale;

        greyScales.push(greyScale);
    }

    context.putImageData(imageData, 0, 0);

    return greyScales;
};

const MAXIMUM_WIDTH = 80;
const MAXIMUM_HEIGHT = 80;

const clampDimensions = (width, height) => {
    const rectifiedWidth = Math.floor(getFontRatio() * width);

    if (height > MAXIMUM_HEIGHT) {
        const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);
        return [reducedWidth, MAXIMUM_HEIGHT];
    }

    if (width > MAXIMUM_WIDTH) {
        const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);
        return [MAXIMUM_WIDTH, reducedHeight];
    }

    return [rectifiedWidth, height];
};

fileInput.onchange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
            const [width, height] = clampDimensions(image.width, image.height);

            canvas.width = width;
            canvas.height = height;

            context.drawImage(image, 0, 0, width, height);
            const greyScales = convertTogreyScales(context, width, height);

            fileInput.style.display = 'none';
            drawAscii(greyScales, width);
        }

        image.src = event.target.result;
    };

    reader.readAsDataURL(file);
};

var rampLength = greyRamp.length;

const getCharacterForgreyScale = greyScale => greyRamp[Math.ceil((rampLength - 1) * greyScale / 255)];

const drawAscii = (greyScales, width) => {
    const ascii = greyScales.reduce((asciiImage, greyScale, index) => {
        let nextChars = getCharacterForgreyScale(greyScale);
        if ((index + 1) % width === 0) {
            nextChars += '\n';
            console.log("something is happen")
        }

        return asciiImage + nextChars;
    }, '');

    asciiImage.textContent = ascii;
};
