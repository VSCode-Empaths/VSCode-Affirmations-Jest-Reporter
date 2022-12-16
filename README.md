<div style="display:grid; justify-content:center; grid-template-columns:repeat(3,auto);">
<img src="./images/Error-Affirmations-Logo.png" alt="Error-Affirmations-Logo" width="40" style="margin-bottom:-10px"/>
<h1 style="display:inline; margin-left:20px; margin-right:20px; color:#fa9ca4; white-space: nowrap;">
Error Affirmations - Jest Reporter</h1>
<img src="./images/Error-Affirmations-Logo.png" alt="Error-Affirmations-Logo" width="40" style="margin-bottom:-10px;"/>
</div>

<br>

Error Affirmations Jest Reporter gives you much needed code-related affirmations whenever your tests fail.

GitHub - https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter

<br>

### **Preview**

<img src="./images/Jest_Example_Default.png" alt="Error-Affirmations-Example" width="800"/>

<br>

### Customize with **Color** and **Border** Themes!!!

<img src="./images/Jest_Example_Themes.png" alt="Error-Affirmations-Example" width="800"/>

<br>

## **Installation**

You may install this package as a development dependency:

```bash
npm i --save-dev error-affirmations
```

<br>

## **Configuration**

Configure [Jest](https://facebook.github.io/jest/docs/en/configuration.html) to use the reporter:

For example, add the following "jest" configuration in your package.json file:
(include the "default" reporter to keep jest's default reporter output)

```json
 "jest": {
     "reporters":
        [
            "default",
            "error-affirmations"
        ]
    },
```

<br>

### (Optionally) Customize the **color** and **border** theme

```json
"jest": {
     "reporters": [
         "default",
        ["error-affirmations",
            { "color": "driven", "border": "waves"}
        ]
    ]
},
```

<br>

### **Color and Border Theme Options**:

(A list of the available colors and borders can also be displayed in the reporter options by adding "mode": "info", in the reporter options)

```json
    "mode": "info",
```

| colorTheme |                                                                                          | borderTheme |                  |
| ---------- | ---------------------------------------------------------------------------------------- | ----------- | ---------------- |
| love       | <img src="./images/color-theme/color-theme-love.png" alt="color-theme-love">             | bamboo      | <>--<>--<>--<>-- |
| happiness  | <img src="./images/color-theme/color-theme-happiness.png" alt="color-theme-happiness">   | waves       | ...oOo...oOo...o |
| serenity   | <img src="./images/color-theme/color-theme-serenity.png" alt="color-theme-serenity">     | simple      | ---------------- |
| driven     | <img src="./images/color-theme/color-theme-driven.png" alt="color-theme-driven">         | fence       | O----O----O----O |
| spooky     | <img src="./images/color-theme/color-theme-spooky.png" alt="color-theme-spooky">         | frame       | +--------------+ |
| optimistic | <img src="./images/color-theme/color-theme-optimistic.png" alt="color-theme-optimistic"> | hearts1     | <3 <3 <3         |
| rainbow    | <img src="./images/color-theme/color-theme-rainbow.png" alt="color-theme-rainbow">       | hearts2     | <3 <3 <3         |
| mono       | <img src="./images/color-theme/color-theme-mono.png" alt="color-theme-mono">             | banner      | '°º¤ø,.,ø¤°º¤ø,. |
| white      | <img src="./images/color-theme/color-theme-white.png" alt="color-theme-white">           | dotty       | ':' ':' ':' ':'  |
| grey       | <img src="./images/color-theme/color-theme-grey.png" alt="color-theme-grey">             | coffeeLuv1  | <3 c[] <3        |
|            |                                                                                          | coffeeLuv2  | <3 c[] <3        |
|            |                                                                                          | smiley      | (ɔ◔‿◔)ɔ ♥        |

<br>

## **Check out our other apps!**

#### **Error Affirmations** - VS Code Extension:

https://marketplace.visualstudio.com/items?itemName=VSCodeEmpaths.erroraffirmations

<img src="./images/notificationbar.png" alt="Error-Affirmations-Logo" width="600"/>

#### **Error Affirmations** - Website:

https://error-affirmations.netlify.app/

<br>

## **Meet the team**

-   Karl Wernsman - <a href="https://www.linkedin.com/in/karl-wernsman/" >LinkedIn</a>
-   Kevin Nail - <a href="https://www.linkedin.com/in/kevinnail/" >LinkedIn</a>
-   Rio Edwards - <a href="https://www.linkedin.com/in/rio-edwards/" >LinkedIn</a>
-   Zach Sultan - <a href="https://www.linkedin.com/in/zachary-sultan/" >LinkedIn</a>
