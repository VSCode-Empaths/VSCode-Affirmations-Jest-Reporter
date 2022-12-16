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

        // Select color/border/loops from user input
        if (this._options) {
            // Get mode from user (Defaults to "normal")
            this.mode = this._options.mode || null;
            // Get loops from user (Defaults to 2)
            this.loops = Number(this._options.loops) || null;
            // Get color theme from user (Defaults to "love")
            if (this._options.color) {
                this.colors = colorThemes[this._options.color] || null;
            }
            // Get border theme from user (Defaults to "hearts2")
            if (this._options.border) {
                this.border = borderThemes[this._options.border] || null;
            }
        }

        // Set defaults for colors/border/loops if null
        if (!this.colors) this.colors = colorThemes.love;
        if (!this.border) this.border = borderThemes.hearts2;
        if (!this.loops) this.loops = 2;
        if (!this.mode) this.mode = "normal";

        // Create Grad
        this.colorGrad = createGrad(this.colors, this.loops);
    }

    async onRunStart() {
        // Fetch affirmations from API by category.id
        const categoryId = 3; // "TDD" category
        const category = await fetchCategories(categoryId);
        if (!category) return;

        // pull affirmations out into errorAffirmations property
        const errorAffirmations = category.affirmations.map((row) => row.text);
        // get random number within length of errorAffirmations array
        const randomNumber = getRandomNumber(errorAffirmations.length);
        // select random affirmation from array
        const affirmation = errorAffirmations[randomNumber];

        // Insert spaces before affirmation to center it within borders
        this.affirmation = centerString(affirmation, this.border[0].length);
    }

    onRunComplete(test, results) {
        if (results.numFailedTests > 0) {
            // display affirmation in terminal
            console.log(); // Newline
            console.log(createGradString(this.border[0], this.colorGrad)); // Border
            console.log(createGradString(this.border[1], this.colorGrad)); // Border
            console.log(); // Newline
            console.log(
                createColorString(this.affirmation, this.colors[0], "bold")
            ); // Affirmation
            console.log(); // Newline
            console.log(createGradString(this.border[1], this.colorGrad)); // Border
            console.log(createGradString(this.border[0], this.colorGrad)); // Border
        }

        if (this.mode === "info") {
            console.log();
            console.log(
                createColorString(infoMsg.header, infoTxtColors.primary, "bold")
            );
            console.log(
                createColorString(infoMsg.disable, infoTxtColors.secondary)
            );
            console.log(
                createColorString(infoMsg.jestConfig, infoTxtColors.secondary)
            );
            console.log(
                createColorString(infoMsg.links, infoTxtColors.secondary)
            );

            console.log(
                createColorString(infoMsg.tableHeader, infoTxtColors.secondary)
            );
            // Create string with color name + pattern
            const colorInfoStrings = createColorInfoStrings(colorThemes);
            // Create string with border name + pattern
            const borderStrings = createBorderInfoStrings(
                borderThemes,
                infoTxtColors.body
            );
            // Find larger object (for formatting)
            const longerArray = findLongerArrayLength(
                colorInfoStrings,
                borderStrings
            );

            // Log table of colors and borders
            for (let i = 0; i < longerArray; i++) {
                const colorString =
                    colorInfoStrings[i] || "                        ";
                const borderString = borderStrings[i] || "";
                const heart = createColorString(
                    "♥",
                    infoTxtColors.primary,
                    "bold"
                );
                console.log(
                    heart + "    " + colorString + "      " + borderString
                );
            }
            console.log();
        }
    }

    getLastError() {
        if (this._shouldFail) {
            return new Error(
                "Error-Affirmations isn't doing too hot... but you are!"
            );
        }
    }
}

module.exports = CustomReporter;
