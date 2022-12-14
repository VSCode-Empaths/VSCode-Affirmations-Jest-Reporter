const chalk = require("chalk");
const gradient = require("gradient-string");
const fetchCategories = require("./fetch-utils.js");
const getRandomNumber = require("./utils.js");
const colorThemes = require("./colorThemes.js");
const borderThemes = require("./borderThemes.js");

class CustomReporter {
    static errorAffirmations;

    constructor(globalConfig, reporterOptions, reporterContext) {
        this._globalConfig = globalConfig;
        this._options = reporterOptions;
        this._context = reporterContext;
    }

    async onRunStart() {
        // Fetch affirmations from API by category.id
        const categoryId = 3; // "Error" category
        const category = await fetchCategories(categoryId);
        if (!category) return;

        // pull affirmations out into errorAffirmations property
        CustomReporter.errorAffirmations = category.affirmations.map(
            (row) => row.text
        );
    }

    onRunComplete(test, results) {
        // User params
        let colors;
        let border;
        let loops;

        // Select color/border/loops from user input
        colors = colorThemes[this._options.colorTheme] || null;
        border = borderThemes[this._options.borderTheme] || null;
        loops = Number(this._options.loops) || null;

        // Create gradient
        const colorGradient = createGradient(colors, loops);

        if (results.numFailedTests > 0) {
            // get random number within length of errorAffirmations array
            const randomNumber = getRandomNumber(
                CustomReporter.errorAffirmations.length
            );
            const affirmation = CustomReporter.errorAffirmations[randomNumber];

            // display affirmation in terminal
            // Border
            console.log();
            console.log(chalk.bold(colorGradient(border[0])));
            console.log(chalk.bold(colorGradient(border[1])));
            console.log();
            // Affirmation
            console.log(
                chalk.bold.hex(colors[0])(
                    CustomReporter.errorAffirmations[randomNumber]
                )
            );
            console.log();
            // Border
            console.log(chalk.bold(colorGradient(border[1])));
            console.log(chalk.bold(colorGradient(border[0])));
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
