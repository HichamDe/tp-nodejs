const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());


const equipes = require('./equipes.json');

app.get('/equipes', (req, res) => {
   res.status(200).json(equipes);
})

app.get('/equipes/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const equipe = equipes.find(equipe => equipe.id === id);
   res.status(200).json(equipe);
})

app.post('/equipes', (req, res) => {
   equipes.push(req.body);
   res.status(200).json(equipes);
})

app.put('/equipes/:id', (req, res) => {
   const id = parseInt(req.params.id);
   let equipe = equipes.find(equipe => equipe.id === id);
   equipe.name = req.body.name,
      equipe.country = req.body.country,
      res.status(200).json(equipe)
})

app.delete('/equipes/:id', (req, res) => {
   const id = parseInt(req.params.id);
   let equipe = equipes.find(equipe => equipe.id === id);
   equipes.splice(equipes.indexOf(equipe), 1);
   res.status(200).json(equipe);
})


const joueurs = require('./joueurs.json');

app.get('/joueurs', (req, res) => {
   res.status(200).json(joueurs);
})

app.get('/joueurs/:id', (req, res) => {
   const id = parseInt(req.params.id)
   const equipe = joueurs.find(joueur => joueur.id === id)
   res.status(200).json(joueur)
})

app.post('/joueurs', (req, res) => {
   joueurs.push(req.body);
   res.status(200).json(joueurs);
})

app.put('/joueurs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   let joueur = joueurs.find(joueur => joueur.id === id);
   joueur.name = req.body.name,
      joueur.country = req.body.country,
      res.status(200).json(joueur)
})

app.delete('/joueurs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   let joueur = joueurs.find(joueur => joueur.id === id);
   joueurs.splice(joueurs.indexOf(joueur), 1);
   res.status(200).json(joueur);
})

app.listen(PORT, () => {
   console.log(`Server is Running At http://localhost:${PORT}/`);
})