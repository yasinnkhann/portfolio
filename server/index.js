const express = require('express');
const gatsby = require('gatsby-plugin-nodejs');

const app = express();

gatsby.prepare({ app }, () => {
  // Here you can define your routes
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`listening on port ${PORT}!!!`));
