const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}))

// Create a new SQLite database
const db = new sqlite3.Database(':memory:');

// Create a table to store the objects
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS objects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    semaine INTEGER,
    autoclave TEXT,
    n_cycle TEXT,
    n_courbe TEXT,
    matricule_1 TEXT,
    _de_date TEXT,
    _de_heure TEXT,
    objectTable TEXT
  )`);
});

// POST endpoint to save the object in the database
app.post('/api/objects', (req, res) => {
  const object = req.body;

  db.run(
    `INSERT INTO objects (semaine, autoclave, n_cycle, n_courbe, matricule_1, _de_date, _de_heure, objectTable)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      object.semaine,
      object.autoclave,
      object.n_cycle,
      object.n_courbe,
      object.matricule_1,
      object._de_date,
      object._de_heure,
      JSON.stringify(object.table)
    ],
    function (err) {
      if (err) {
        console.error('Error saving object to database:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log('Object saved to database with ID:', this.lastID);
        res.status(200).json({ message: 'Object saved successfully' });
      }
    }
  );
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
})

// GET endpoint to retrieve all objects
app.get('/api/objects', (req, res) => {
  db.all(`SELECT * FROM objects`, (err, rows) => {
    if (err) {
      console.error('Error retrieving objects from database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Objects retrieved successfully');
      const objects = rows.map((row) => {
        const { objectTable, ...object } = row;
        return { ...object, table: JSON.parse(objectTable) };
      });
      res.status(200).json(objects);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
