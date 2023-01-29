# [![img8](https://i.imgur.com/dOjbaYz.png)](https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/) Error Affirmations - Jest Reporter [![img8](https://i.imgur.com/dOjbaYz.png)](https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter/)

<br>

Our Jest Reporter gives you much needed code-related affirmations whenever your tests fail.

GitHub - https://github.com/VSCode-Empaths/VSCode-Affirmations-Jest-Reporter

<br>

### **Preview**

![default_border_color](https://i.imgur.com/fUP85qh.png)

<br>

### Customize with **Color** and **Border** Themes!!!

![custom_border_color](https://i.imgur.com/EgmOC34.png)

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
(make sure to include the "default" reporter to preserve jest's default output)

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

### **Theme Options**:

A list of the available colors and borders can also be displayed in the reporter options by adding "mode": "info", in the reporter options.

```json
    "mode": "info",
```

![Imgur](https://i.imgur.com/7Tmj3x3.png)

<br>

### **Keep it Simple!**:

We also provide an option for you minimalists out there! With "mode": "minimal", you get to enjoy the same great affirmations but without the border decorations.

```json
    "mode": "minimal",
```

<br>

## **Check out our other apps!**

#### **Error Affirmations** - VS Code Extension:

https://marketplace.visualstudio.com/items?itemName=VSCodeEmpaths.erroraffirmations

[![VSCode Extension](https://i.imgur.com/F1vyARv.png)](https://marketplace.visualstudio.com/items?itemName=VSCodeEmpaths.erroraffirmations)

#### **Error Affirmations** - Website:

https://error-affirmations.netlify.app/

<br>

## **Meet the team**

-   Karl Wernsman - <a href="https://www.linkedin.com/in/karl-wernsman/" >LinkedIn</a>
-   Kevin Nail - <a href="https://www.linkedin.com/in/kevinnail/" >LinkedIn</a>
-   Rio Edwards - <a href="https://www.linkedin.com/in/rio-edwards/" >LinkedIn</a>
-   Zach Sultan - <a href="https://www.linkedin.com/in/zachary-sultan/" >LinkedIn</a>
