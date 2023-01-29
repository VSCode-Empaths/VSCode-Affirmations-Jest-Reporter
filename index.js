const fetchCategories = require("./fetch-utils.js");
const colorThemes = require("./colorThemes.js");
const borderThemes = require("./borderThemes.js");
const { getRandomNumber, findLongerArrayLength } = require("./utils.js");
const {
    createColorInfoStrings,
    createGrad,
    createGradString,
    centerString,
    createColorString,
    createBorderInfoStrings,
} = require("./stringUtils.js");
const { infoTxtColors, infoMsg } = require("./infoText.js");

const defaults = {
    mode: "normal",
    loops: 2,
    color: colorThemes.love,
    border: borderThemes.hearts2,
    categoryId: 3, // "TDD" category
    outputStrLength: 74,
};

class CustomReporter {
    mode;
    affirmation;
    colors;
    colorGrad;
    border;
    loops;

    constructor(globalConfig, reporterOptions, reporterContext) {
        this._globalConfig = globalConfig;
        this._options = reporterOptions;
        this._context = reporterContext;

        // Set mode/loops/color/border from user input or default
        this.mode = this._options?.mode || defaults.mode;
        this.loops = Number(this._options?.loops) || defaults.loops;
        this.colors = colorThemes[this._options?.color] || defaults.color;
        this.border = borderThemes[this._options?.border] || defaults.border;

        // Create Grad
        this.colorGrad = createGrad(this.colors, this.loops);
    }

    async onRunStart() {
        // Fetch affirmations from API by category.id
        const category = await fetchCategories(defaults.categoryId);
        if (!category) return;

        // pull affirmations out into errorAffirmations property
        const errorAffirmations = category.affirmations.map((row) => row.text);
        // get random number within length of errorAffirmations array
        const randomNumber = getRandomNumber(errorAffirmations.length);
        // select random affirmation from array
        const affirmation = errorAffirmations[randomNumber];

        // Insert spaces before affirmation string to center it
        this.affirmation = centerString(affirmation, this.border[0].length);
    }

    onRunComplete(test, results) {
        if (this.mode === "info") {
            console.log();
            console.log(createColorString(infoMsg.header, infoTxtColors.primary, "bold"));
            console.log(createColorString(infoMsg.disable, infoTxtColors.secondary));
            console.log(createColorString(infoMsg.jestConfig, infoTxtColors.secondary));
            console.log(createColorString(infoMsg.links, infoTxtColors.secondary));

            console.log(createColorString(infoMsg.tableHeader, infoTxtColors.secondary));
            // Create string with color name + pattern
            const colorInfoStrings = createColorInfoStrings(colorThemes);
            // Create string with border name + pattern
            const borderStrings = createBorderInfoStrings(borderThemes, infoTxtColors.body);
            // Find larger object (for formatting)
            const longerArray = findLongerArrayLength(colorInfoStrings, borderStrings);

            // Log table of colors and borders
            for (let i = 0; i < longerArray; i++) {
                const colorString = colorInfoStrings[i] || "                        ";
                const borderString = borderStrings[i] || "";
                const heart = createColorString("♥", infoTxtColors.primary, "bold");
                console.log(heart + "    " + colorString + "      " + borderString);
            }
        }

        if (results.numFailedTests > 0) {
            // display affirmation in terminal
            console.log(); // Newline
            if (this.mode !== "minimal") {
                console.log(createGradString(this.border[0], this.colorGrad)); // Border
                console.log(createGradString(this.border[1], this.colorGrad)); // Border
                console.log(); // Newline
            }
            console.log(createColorString(this.affirmation, this.colors[0], "bold")); // Affirmation
            console.log(); // Newline
            if (this.mode !== "minimal") {
                console.log(createGradString(this.border[1], this.colorGrad)); // Border
                console.log(createGradString(this.border[0], this.colorGrad)); // Border
            }
        }
    }

    getLastError() {
        if (this._shouldFail) {
            return new Error("Error-Affirmations isn't doing too hot... but you are!");
        }
    }
}

module.exports = CustomReporter;
