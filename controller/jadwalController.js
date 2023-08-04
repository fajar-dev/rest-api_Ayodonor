const getJadwal = (db) => async (req, res) => {
  try {
    const query = 'SELECT  udd.nama as nama, kegiatan.instansi as instansi, kegiatan.alamat as alamat, kegiatan.jumlah as jumlah,kegiatan.lat as lat,kegiatan.lng as lng  FROM kegiatan JOIN udd ON kegiatan.udd = ayodonor.udd.id WHERE DATE_FORMAT(kegiatan.TglPenjadwalan, "%Y-%d-%m") = DATE_FORMAT(CURDATE(), "%Y-%d-%m") ORDER BY udd.id';
    const [results] = await db.promise().query(query);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
}

module.exports = {
  getJadwal,
};