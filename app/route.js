const express = require("express");
const router = express.Router();
const db = require('../config/koneksi');
const kontakController = require('../controller/kontakController');
const beritaController = require('../controller/beritaController');

router.get('/kontak', kontakController.getKontak(db));
router.get('/kontak/search', kontakController.searchKontak(db));

router.get('/berita', beritaController.getBerita(db));
router.get('/berita/:id', beritaController.getBeritaById(db));


module.exports = router;
