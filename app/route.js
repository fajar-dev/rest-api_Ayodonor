const express = require("express");
const router = express.Router();
const db = require('../config/koneksi');
const kontakController = require('../controller/kontakController');

router.get('/kontak', kontakController.getKontak(db));
router.get('/kontak/search', kontakController.searchKontak(db));

module.exports = router;
