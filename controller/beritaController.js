const getBerita = (db) => async (req, res) => {
  try {
    const query = 'SELECT tb_berita.id, tb_berita.gambar as foto, tb_berita.judul as judul_berita, DATE_FORMAT(tb_berita.tgl,"%d %b %y")as tanggal_posting, tb_berita.penulis, udd.nama FROM tb_berita JOIN udd ON tb_berita.udd = udd.id ORDER BY tb_berita.tgl DESC limit 20';
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
      success: true,
      message: 'error processing',
      data: []
    });
  }
}

const getBeritaById = (db) => async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT tb_berita.id, tb_berita.gambar as foto, tb_berita.judul as judul_berita, DATE_FORMAT(tb_berita.tgl,"%d %b %y")as tanggal_posting, tb_berita.berita as isi_berita, tb_berita.penulis, udd.nama FROM tb_berita JOIN udd ON tb_berita.udd = udd.id WHERE tb_berita.id = ? ORDER BY tb_berita.tgl DESC limit 20';
    const [results] = await db.promise().query(query, [id]);
    if (results.length === 0) {
      res.status(204).json({
        response: 204,
        success: true,
        message: 'results not found',
        data: []
      })    
    } else {
      res.status(200).json({
        response: 200,
        success: true,
        message: 'fetching results successfully',
        data: results[0]
      })    
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      response: 500,
      success: true,
      message: 'error processing',
      data: []
    });
  }
}

module.exports = {
  getBerita,
  getBeritaById 
};