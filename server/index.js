const express = require('express');
const gatsby = require('gatsby-plugin-nodejs');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(cookieParser());

gatsby.prepare({ app }, () => {
  // Here you can define your routes
  app.get('/cookie', (req, res) => {
    res.cookie('cookie-on-entry', 'my-cookie');
    res.json('hello world');
  });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`listening on port ${PORT}!!!`));
