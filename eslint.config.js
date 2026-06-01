module.exports = [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: true,
                document: true,
                bootstrap: true,
                console: true,
                localStorage: true
            }
        },
        rules: {
            "no-unused-vars": "off",
            "no-console": "off",
            "no-undef": "warn"
        }
    }
];
