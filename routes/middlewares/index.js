var router = require('express').Router();

// Middleare set JSON Header default
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.data = {
        status: null,
        message: null,
        error: null,
        version: process.env.VERSION || "0.0.0",
        data: []
    }
    res.setData = (data, message = 'success') => {
        res.data.data = data
        res.data.status = 'success'
        res.data.message = message
        return res
    }
    res.setSuccessMessage = (message = "Success!") => {
        res.data.status = 'success'
        res.data.message = message
        return res
    }
    res.setErrorMessage = (errorCode, message = "Failed!") => {
        res.data.status = 'failed'
        res.data.error = errorCode
        res.data.message = message
        return res
    }
    next()
});

module.exports = router;