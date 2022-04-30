import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
