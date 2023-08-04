const express = require("express");
const router = express.Router();
const dbMaster = require('../config/koneksiMaster');
const dbSlave = require('../config/koneksiSlave');

const kontakController = require('../controller/kontakController');
const beritaController = require('../controller/beritaController');
const stokController = require('../controller/stokController');
const jadwalController = require('../controller/jadwalController');

router.get('/kontak', kontakController.getKontak(dbMaster));
router.get('/kontak/search', kontakController.searchKontak(dbMaster));

router.get('/berita', beritaController.getBerita(dbMaster));
router.get('/berita/:id', beritaController.getBeritaById(dbMaster));

router.get('/stok/:id', stokController.getStok(dbSlave));
router.get('/jadwal', jadwalController.getJadwal(dbSlave));


module.exports = router;
