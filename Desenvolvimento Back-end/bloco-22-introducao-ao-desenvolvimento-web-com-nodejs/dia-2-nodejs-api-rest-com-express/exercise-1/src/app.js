const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Banho no gato',
    status: 'Feito',
  },
  {
    id: 3,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 4,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  
  const activity = activities.find((act) => act.id === Number(id));

  res.status(200).json({ activity });
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let newActivities = activities;

  if (status) {
    newActivities = activities.filter((act) => act.status === status);
  }

  res.status(200).json({ activities: newActivities });
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;

  const newActivities = activities.filter((act) => act.description.includes(q));

  res.status(200).json({ activities: newActivities });
});

module.exports = app;