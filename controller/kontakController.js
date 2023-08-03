const db = require('../config/koneksi');
const response = require('../app/response');

const getKontak = (db) => (req, res) => {
  const query = 'SELECT id, nama, alamat, provinsi, telp, lat, lng, FROM udd';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve users' });
    } else {
      res.json(results);
    }
  });
};
const getKontaka = (res) => {
  const sql = "";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, 'siswa get list', res);
  });
};

module.exports = {
  getKontak,
};