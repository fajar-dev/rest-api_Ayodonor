const getStok = (db) => async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT stokdarah.produk, stokdarah.a_pos, stokdarah.b_pos, stokdarah.o_pos, stokdarah.ab_pos, stokdarah.a_neg, stokdarah.b_neg, stokdarah.o_neg, stokdarah.ab_neg, stokdarah.update_on FROM stokdarah INNER JOIN udd ON stokdarah.udd = udd.id WHERE udd.id = ? And (stokdarah.a_pos OR stokdarah.b_pos OR stokdarah.o_pos OR stokdarah.ab_pos) != 0 ORDER BY stokdarah.produk DESC';
    const [results] = await db.promise().query(query, [id]);
    if (results.length === 0) {
      res.status(404).json({
        response: 404,
        success: true,
        message: 'results not found',
        data: []
      })    
    } else {
      res.status(200).json({
        response: 200,
        success: true,
        message: 'fetching results successfully',
        data: results 
      })
    }
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

module.exports = {
  getStok,
};