const rescue = require("express-rescue");

const handler = {
    // Home
    home: () => {
        return [
            (req, res, next) => {
                // JOI or another validation HERE
                next();
            },
            rescue(async (req, res) => {
                res.json({TEST: process.env.TEST});
            }),
            (error, req, res, next) => {
                res.json(
                    res.setErrorMessage("A error ocurred"),
                );
            },
        ];
    },
};

module.exports = handler;
