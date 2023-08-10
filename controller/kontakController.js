
const getKontak = (db) => async (req, res) => {
  try {
    const query = 'SELECT id, nama, alamat, provinsi, telp, lat, lng FROM udd';
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

const searchKontak = (db) => async (req, res) => {
  try {
    const searchKeyword = req.query.keyword || '';
    const query = 'SELECT id, nama, alamat, provinsi, telp, lat, lng FROM udd WHERE nama LIKE ?';
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
  getKontak,
  searchKontak
};