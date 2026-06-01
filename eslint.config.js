module.exports = [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: true,
                document: true,
                bootstrap: true,
                console: true
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
            "no-undef": "warn"
        }
    }
];
