const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './web_app/templates/**/*.html'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        plugin(({addVariant, e}) => {
            addVariant('label-checked', ({modifySelectors, separator}) => {
                modifySelectors(
                    ({className}) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const inputTypeRadio = 'input[type="radio"]'; // your input selector. Could be any
                        return `${inputTypeRadio}:checked < .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        }),
    ],
}

