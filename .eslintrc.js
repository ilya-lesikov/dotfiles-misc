module.exports = {
    "extends": "google",
    "env": {
        "browser": true,
        "jquery": true,
        "greasemonkey": true,
        "es6": true
    },
    "rules": {
        "require-jsdoc": 0,
        "new-cap": 0,
        "max-len": ["error", 120],
        "no-multi-spaces": 0,
        "arrow-parens": ["error", "as-needed"],
        "key-spacing": [{"mode": "minimum"}]
    }
};
