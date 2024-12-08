const express = require('express');
const app = express();

app.use(express.json());


const posts = [
  { id: 1, title: 'Poste 1', content: 'Contenu du poste 1' },
  { id: 2, title: 'Poste 2', content: 'Contenu du poste 2' },
  { id: 3, title: 'Poste 3', content: 'Contenu du poste 3' },
];

app.get('/postList', (req, res) => {
  res.status(200).json(posts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
