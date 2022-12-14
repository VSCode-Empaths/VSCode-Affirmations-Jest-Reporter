const chalk = require("chalk");
const gradient = require("gradient-string");
const fetchCategories = require("./fetch-utils.js");
const getRandomNumber = require("./utils.js");
const colorThemes = require("./colorThemes.js");
const borderThemes = require("./borderThemes.js");

class CustomReporter {
    affirmation;
    colors;
    colorGradient;
    border;
    loops;

    constructor(globalConfig, reporterOptions, reporterContext) {
        this._globalConfig = globalConfig;
        this._options = reporterOptions;
        this._context = reporterContext;

        // Select color/border/loops from user input
        if (this._options) {
            if (this._options.colorTheme) {
                // Get color theme from user (Defaults to "love")
                this.colors =
                    colorThemes[this._options.colorTheme] || colorThemes.love;
            }
            if (this._options.borderTheme) {
                // Get border theme from user (Defaults to "hearts2")
                this.border =
                    borderThemes[this._options.borderTheme] ||
                    borderThemes.hearts2;
            }
            // Get loops from user (Defaults to 2)
            if (this._options.loops) {
                this.loops = Number(this._options.loops) || 2;
            }
            // Create gradient
            this.colorGradient = createGradient(this.colors, this.loops);
        }
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

        this.affirmation = errorAffirmations[randomNumber];
    }

    onRunComplete(test, results) {
        if (results.numFailedTests > 0) {
            // display affirmation in terminal
            console.log(); // Newline
            console.log(this.border);
            console.log(chalk.bold(this.colorGradient(this.border[0]))); // Border
            console.log(chalk.bold(this.colorGradient(this.border[1]))); // Border
            console.log(); // Newline
            console.log(chalk.bold.hex(this.colors[0])(this.affirmation)); // Affirmation
            console.log(); // Newline
            console.log(chalk.bold(this.colorGradient(this.border[1]))); // Border
            console.log(chalk.bold(this.colorGradient(this.border[0]))); // Border
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

// Utility functions
// Loops through colors array and creates a new version with looping colors
function createGradient(colors = love, loops = 2) {
    let colorsRepeat = [];
    let length = colors.length;
    for (let i = 0; i < loops * 2; i++) {
        for (let j = 0; j < length; j++) {
            if (i % 2 == 0) {
                colorsRepeat.push(colors[j]);
            } else {
                colorsRepeat.push(colors[length - j - 1]);
            }
        }
    }
    return gradient(colorsRepeat);
}

module.exports = CustomReporter;
