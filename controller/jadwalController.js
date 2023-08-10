const getJadwal = (db) => async (req, res) => {
  try {
    const query = 'SELECT  udd.nama as nama, kegiatan.instansi as instansi, kegiatan.alamat as alamat, kegiatan.jumlah as jumlah,kegiatan.lat as lat,kegiatan.lng as lng  FROM kegiatan JOIN udd ON kegiatan.udd = ayodonor.udd.id WHERE DATE_FORMAT(kegiatan.TglPenjadwalan, "%Y-%d-%m") = DATE_FORMAT(CURDATE(), "%Y-%d-%m") ORDER BY udd.id';
    const [results] = await db.promise().query(query);
    res.status(200).json({
      response: 200,
      success: true,
      message: 'fetching results successfully',
      data: results 
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      response: 500,
      success: false,
      message: 'error processing',
      data: []
    });
  }
}

const searchInstansi = (db) => async (req, res) => {
  try {
    const searchKeyword = req.query.keyword || '';
    const query = 'SELECT  udd.nama as nama, kegiatan.instansi as instansi, kegiatan.alamat as alamat, kegiatan.jumlah as jumlah,kegiatan.lat as lat,kegiatan.lng as lng  FROM kegiatan JOIN udd ON kegiatan.udd = ayodonor.udd.id WHERE DATE_FORMAT(kegiatan.TglPenjadwalan, "%Y-%d-%m") = DATE_FORMAT(CURDATE(), "%Y-%d-%m") AND instansi LIKE ? ORDER BY udd.id';
    const [results] = await db.promise().query(query, [`%${searchKeyword}%`]);
    res.status(200).json({
      response: 200,
      success: true,
      message: 'fetching results successfully',
      data: results 
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      response: 500,
      success: false,
      message: 'error processing',
      data: []
    });
  }
};

module.exports = {
  getJadwal,
  searchInstansi
};