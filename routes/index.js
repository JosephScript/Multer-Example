var express = require('express');
var router = express.Router();
var Uploads = require('../models/upload');

router.get('/', function (req, res, next) {
    Uploads.find({}, function (err, uploads) {
        if (err) {
            next(err);
        } else {
            res.render('index', {uploads: uploads});
        }
    });

});

module.exports = router;
