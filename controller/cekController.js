const rapidCheck  = (db) => async (req, res) => {
  try {
    const  kode  = req.body.kode;
    const query = 'SELECT pkode as Kode, pnama as Nama, IF(pjk="0","Laki-laki","Perempuan")as Jk, DATE_FORMAT(ptgllahir, "%d %M %Y") as Tanggalahir, pgoldarah as GolDarah, prhesus as Rhesus, DATE_FORMAT(ptglkembali, "%d %M %Y") as tglkembali, pjmldonor as jumDonor FROM pendonor WHERE pkode like ? LIMIT 1';
    const [results] = await db.promise().query(query, [kode]);
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(results[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  rapidCheck
};