const express = require("express");
const router = express.Router();
const kontakController = require('../controller/kontakController');
const db = require('../config/koneksi');

router.get('/', kontakController.getKontak(db));

module.exports = router;
