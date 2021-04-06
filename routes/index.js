const express = require('express');
const router = express.Router();
const path = require('path');
const options = {
    root: path.join(__dirname, '../public'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/:lang', function (req, res, next) {
    res.sendFile(langFilesPath(req.params.lang), options)
})

function langFilesPath(lang) {
    return path.join('lang', lang + '.html')
}

module.exports = router;
