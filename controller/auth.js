const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Replace with your own secret key

const login = async (req, res) => {
  try {
    const { identity, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? OR phone_number = ?';
    const [rows] = await db.promise().query(query, [identity, identity]);

    if (rows.length === 0 || !bcrypt.compareSync(password, rows[0].password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    const token = jwt.sign({ id: user.id, username: user.username, phone_number: user.phone_number }, secretKey, {
      expiresIn: '1h', // Token expiration time
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};