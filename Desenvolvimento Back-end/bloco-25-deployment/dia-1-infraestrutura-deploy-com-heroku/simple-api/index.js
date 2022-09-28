const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`${process.env.TESTE}`));

app.listen(PORT, () => console.log(`Running on port ${3000}`));