const db = require('../config/koneksi');
const response = require('../app/response');

const getKontak = (db) => async (req, res) => {
  try {
    const query = 'SELECT id, nama, alamat, provinsi, telp, lat, lng FROM udd';
    const [results] = await db.promise().query(query);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
}

const searchKontak = (db) => async (req, res) => {
  try {
    const searchKeyword = req.query.keyword || '';
    const query = 'SELECT id, nama, alamat, provinsi, telp, lat, lng FROM udd WHERE nama LIKE ?';
    const [results] = await db.promise().query(query, [`%${searchKeyword}%`]);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to search for users' });
  }
};

module.exports = {
  getKontak,
  searchKontak
};