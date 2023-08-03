const db = require('../config/koneksi');
const response = require('../app/response');

const getKontak = (res) => {
  const sql = "SELECT id, nama, alamat, provinsi, telp, lat, lng, FROM udd";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, 'siswa get list', res);
  });
};

module.exports = {
  getKontak,
};