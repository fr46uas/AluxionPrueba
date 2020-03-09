var express = require('express');
var router = express.Router();

const Archivo = require('../../models/archivo');

router.post('/create', (req, res) => {
    Archivo.insert(req.body)
        .then(result => {
            res.redirect('/archivo');
        }).catch(err => {
            console.log(err);
        })
});

router.post('/update', (req, res) => {
    Archivo.updateById(req.body)
        .then(result => {
            res.redirect('/archivo');
        }).catch(err => {
            console.log(err)
        })
});

router.post('/download', (req, res) => {
    Archivo.getById(req.body)
        .then(result => {
            res.redirect('/archivo');
        }).catch(err => {
            console.log(err)
        })
});

router.post('/delete', (req, res) => {
    Archivo.deleteById(req.body)
        .then(result => {
            res.redirect('/archivo');
        }).catch(err => {
            console.log(err)
        })
});

module.exports = router;