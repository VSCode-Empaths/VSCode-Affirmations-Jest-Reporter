const chalk = require("chalk");
const gradient = require("gradient-string");

function createColorString(string, color, style) {
    if (style === "bold") return chalk.bold.hex(color)(string);
    else return chalk.hex(color)(string);
}

function createGradString(string, grad) {
    return chalk.bold(grad(string));
}

function createColorInfoStrings(colorThemes) {
    let colorInfoStrings = [];
    for (const color in colorThemes) {
        // Create Grads
        const newGrad = createGrad(colorThemes[color]);

        // Insert spaces before Grads to align them
        const spaces = "           "; // "16 spaces"
        const numSpacesCut = spaces.length - color.length;
        const newSpaces = spaces.slice(0, numSpacesCut);
        const colorInfo = color + newSpaces;
        const coloredColorInfo = createColorString(colorInfo, colorThemes[color], "bold");
        const coloredDash = createColorString("-  ", colorThemes[color], "bold");

        const colorInfoString = coloredColorInfo + coloredDash + newGrad("██████████");
        const coloredColorInfoString = createColorString(colorInfoString, color, "bold");
        colorInfoStrings.push(coloredColorInfoString);
    }
    return colorInfoStrings;
}

function createBorderInfoStrings(borderThemes, color) {
    const borderStrings = [];
    for (const border in borderThemes) {
        // Insert spaces before Grads to align them
        const spaces = "            ";
        const numSpacesCut = spaces.length - border.length;
        const newSpaces = spaces.slice(0, numSpacesCut);
        const borderSlice = borderThemes[border][0].slice(0, 16);
        const borderString = border + newSpaces + "-  " + borderSlice;
        const coloredBorderString = createColorString(borderString, color, "bold");

        borderStrings.push(coloredBorderString);
        // console.log(borderString);
    }
    return borderStrings;
}

// Adds spaces to the beginning of a string to center it within an area
function centerString(string, areaLength) {
    let spaces = "";
    const numInsertSpaces = (areaLength - string.length) / 2;
    for (let i = 0; i < numInsertSpaces; i++) {
        spaces += " ";
    }
    return spaces + string;
}

// Loops through colors array and creates a new Grad with looping colors
function createGrad(colors = colorThemes.love, loops = 2) {
    let colorsRepeat = [];
    let length = colors.length;
    for (let i = 0; i < loops * 2; i++) {
        for (let j = 0; j < length; j++) {
            if (i % 2 == 0) {
                // Outer iterator is even
                // Loop forwards from beginning of colors array
                colorsRepeat.push(colors[j]);
            } else {
                // Outer iterator is odd
                // Loop backwards from end of colors array
                colorsRepeat.push(colors[length - j - 1]);
            }
        }
    }
    return gradient(colorsRepeat);
}

`                    ERROR AFFIRMATIONS INFO                                   \n` +
    `(disable this msg: package.json/jest/reporters/error-affirmations/mode=normal)\n` +
    `                                                                       ^      \n` +
    `
    | colorTheme |
    | ---------- |
    | love       |
    | happiness  |
    | serenity   |
    | driven     |
    | spooky     |
    | optimistic |
    | rainbow    |
    | mono       |
    | white      |
    | grey       |
    |            |
    |            |\n` +
    `border themes:\n` +
    `bamboo, waves, simple, fence, frame, hearts1,\n` +
    `hearts2, banner, dotty, coffeeLuv1, coffeeLuv2, smiley\n` +
    `\n` +
    `https://www.npmjs.com/package/error-affirmations\n`;

module.exports = {
    createGrad,
    centerString,
    createColorInfoStrings,
    createColorString,
    createGradString,
    createBorderInfoStrings,
};
