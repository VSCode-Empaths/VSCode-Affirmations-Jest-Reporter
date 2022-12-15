const chalk = require("chalk");
const gradient = require("gradient-string");
const fetchCategories = require("./fetch-utils.js");
const getRandomNumber = require("./utils.js");
const colorThemes = require("./colorThemes.js");
const borderThemes = require("./borderThemes.js");

class CustomReporter {
    mode;
    affirmation;
    colors;
    colorGradient;
    border;
    loops;
    infoTextColor;

    constructor(globalConfig, reporterOptions, reporterContext) {
        this._globalConfig = globalConfig;
        this._options = reporterOptions;
        this._context = reporterContext;

        this.infoTextColor = "#F99F9F";
        // Select color/border/loops from user input
        if (this._options) {
            // Get mode from user (Defaults to "normal")
            this.mode = this._options.mode || null;
            // Get loops from user (Defaults to 2)
            this.loops = Number(this._options.loops) || null;
            // Get color theme from user (Defaults to "love")
            if (this._options.colorTheme) {
                this.colors = colorThemes[this._options.colorTheme] || null;
            }
            // Get border theme from user (Defaults to "hearts2")
            if (this._options.borderTheme) {
                this.border = borderThemes[this._options.borderTheme] || null;
            }
        }

        // Set defaults for colors/border/loops if null
        if (!this.colors) this.colors = colorThemes.love;
        if (!this.border) this.border = borderThemes.hearts2;
        if (!this.loops) this.loops = 2;
        if (!this.mode) this.mode = "normal";

        // Create gradient
        this.colorGradient = createGradient(this.colors, this.loops);
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
        this.affirmation = errorAffirmations[randomNumber];

        // Insert spaces before affirmation to center it within borders
        const affirmationLength = this.affirmation.length;
        const borderLength = this.border[0].length;
        const numInsertSpaces = (borderLength - affirmationLength) / 2;
        for (let i = 0; i < numInsertSpaces; i++) {
            this.affirmation = " " + this.affirmation;
        }
    }

    onRunComplete(test, results) {
        if (results.numFailedTests > 0) {
            // display affirmation in terminal
            console.log(); // Newline
            console.log(chalk.bold(this.colorGradient(this.border[0]))); // Border
            console.log(chalk.bold(this.colorGradient(this.border[1]))); // Border
            console.log(); // Newline
            console.log(chalk.bold.hex(this.colors[0])(this.affirmation)); // Affirmation
            console.log(); // Newline
            console.log(chalk.bold(this.colorGradient(this.border[1]))); // Border
            console.log(chalk.bold(this.colorGradient(this.border[0]))); // Border
        }
        if (this.mode === "info") {
            console.log();
            console.log(
                chalk.bold.hex(this.infoTextColor)(
                    `ERROR AFFIRMATIONS INFO\n` +
                        `(disable this msg: package.json/jest/reporters/error-affirmations/mode=normal)\n` +
                        `                                                                       ^      \n` +
                        `color themes:\n` +
                        `love, gratitude, happiness, serenity, thoughtful,\n` +
                        `spooky, optimistic, rainbow, mono, white, grey\n` +
                        `\n` +
                        `border themes:\n` +
                        `bamboo, waves, simple, fence, frame, hearts1,\n` +
                        `hearts2, banner, dotty, coffeeLuv1, coffeeLuv2, smiley\n`
                )
            );
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

module.exports = CustomReporter;
