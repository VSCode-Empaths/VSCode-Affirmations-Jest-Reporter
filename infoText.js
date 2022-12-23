const infoTxtColors = {
    primary: "#F99F9F",
    secondary: "#f7b0b0",
    body: "#C8CCC8",
};

// prettier-ignore
const infoMsg = {
    header:
`♥                    ERROR AFFIRMATIONS INFO                                   `,
    disable:
`♥               (hide this msg: "mode"="normal")
♥                                              `,
    jestConfig:
`♥    USAGE: (place in package.json)                           
♥    "jest":
♥      "reporters": [
♥        "default",
♥        [ 
♥          "error-affirmations", 
♥          {"mode":"normal", "color":"driven", "border":"bamboo"} 
♥        ]
♥      ]
♥    },
♥`,

    links:
`♥   JEST REPORTER - 
♥   https://www.npmjs.com/package/error-affirmations                          
♥   CHECK OUT OUR VSCODE EXTENSION -
♥   https://marketplace.visualstudio.com/items?itemName=VSCodeEmpaths.erroraffirmations
♥`,

tableHeader:
`♥    _______COLORS___________      __________BORDERS______________                          
♥`,
};

module.exports = { infoTxtColors, infoMsg };
