// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const gatsby = require('gatsby-plugin-nodejs');

// const app = express();
// const PORT = process.env.PORT || 8001;

// app.use(cors({ origin: true, credentials: true }));
// app.use(cookieParser());

// gatsby.prepare({ app }, () => {
//   // Here you can define your routes
//   app.get('/cookie', (req, res) => {
//     if (
//       !res.getHeaders()['set-cookie'] &&
//       !req.cookies.entry &&
//       !req.headers.koockie
//     ) {
//       res.json('no-cookie');
//     }
//     if (
//       !res.getHeaders()['set-cookie'] &&
//       !req.cookies.entry &&
//       req.headers.koockie
//     ) {
//       res.setHeader('set-cookie', [`entry=my-cookie`]);
//       req.cookies.entry = 'my-cookie';
//       res.json(res.getHeaders()['set-cookie']);
//     }
//   });
// });

// app.listen(PORT, () => console.log(`listening on port ${PORT}!!!`));
