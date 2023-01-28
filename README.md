<div style="display:grid; justify-content:center; grid-template-columns:repeat(3,auto);">
 
<img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/Error-Affirmations-Logo.png?raw=true" alt="Error-Affirmations-Logo" width="225" style="margin-bottom:-10px"/><h1>Error Affirmations - Jest Reporter</h1>
</div>

<br>

Error Affirmations Jest Reporter gives you much needed code-related affirmations whenever your tests fail.

GitHub - https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter

<br>

### **Preview**

<img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/Jest_Example_Default.png?raw=true" alt="Error-Affirmations-Example" width="800"/>

<br>

### Customize with **Color** and **Border** Themes!!!

<img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/Jest_Example_Themes.png?raw=true" alt="Error-Affirmations-Example" width="800"/>

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
            ["error-affirmations", {
                "colorTheme": "driven",
                "borderTheme": "waves"
            }]
        ]
    },
```

<br>

### **Color and Border Theme Options**:

(A list of the available colors and borders can also be displayed in the reporter options by adding "mode": "info", in the reporter options)

```json
    "mode": "info",
```

| colorTheme |                                                                                                                                                                               | borderTheme |                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------- |
| love       | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-love.png?raw=true" alt="color-theme-love">             | bamboo      | <>--<>--<>--<>-- |
| happiness  | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-happiness.png?raw=true" alt="color-theme-happiness">   | waves       | ...oOo...oOo...o |
| serenity   | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-serenity.png?raw=true" alt="color-theme-serenity">     | simple      | ---------------- |
| driven     | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-driven.png?raw=true" alt="color-theme-driven">         | fence       | O----O----O----O |
| spooky     | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-spooky.png?raw=true" alt="color-theme-spooky">         | frame       | +--------------+ |
| optimistic | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-optimistic.png?raw=true" alt="color-theme-optimistic"> | hearts1     | <3 <3 <3         |
| rainbow    | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-rainbow.png?raw=true" alt="color-theme-rainbow">       | hearts2     | <3 <3 <3         |
| mono       | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-mono.png?raw=true" alt="color-theme-mono">             | banner      | '°º¤ø,.,ø¤°º¤ø,. |
| white      | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-white.png?raw=true" alt="color-theme-white">           | dotty       | ':' ':' ':' ':'  |
| grey       | <img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/color-theme/color-theme-grey.png?raw=true" alt="color-theme-grey">             | coffeeLuv1  | <3 c[] <3        |
|            |                                                                                                                                                                               | coffeeLuv2  | <3 c[] <3        |
|            |                                                                                                                                                                               | smiley      | (ɔ◔‿◔)ɔ ♥        |

<br>

## **Check out our other apps!**

#### **Error Affirmations** - VS Code Extension:

https://marketplace.visualstudio.com/items?itemName=VSCodeEmpaths.erroraffirmations

<img src="https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/blob/main/images/notificationbar.png?raw=true" alt="Error-Affirmations-Logo" width="600"/>

#### **Error Affirmations** - Website:

https://error-affirmations.netlify.app/

<br>

## **Meet the team**

-   Karl Wernsman - <a href="https://www.linkedin.com/in/karl-wernsman/" >LinkedIn</a>
-   Kevin Nail - <a href="https://www.linkedin.com/in/kevinnail/" >LinkedIn</a>
-   Rio Edwards - <a href="https://www.linkedin.com/in/rio-edwards/" >LinkedIn</a>
-   Zach Sultan - <a href="https://www.linkedin.com/in/zachary-sultan/" >LinkedIn</a>
