import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import Cors from 'cors';

const cors = Cors();

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) {
  await new Promise((resolve, reject) => {
    cors(req, res, result => {
      if (result instanceof Error) {
        reject(result);
      }
      resolve(result);
    });
  });

  if (req.method === `GET`) {
    if (
      !res.getHeaders()[`set-cookie`] &&
      !req.cookies?.entry &&
      !req.headers.kookie
    ) {
      res.json(`no-cookie`);
    }
    if (
      !res.getHeaders()[`set-cookie`] &&
      !req.cookies?.entry &&
      req.headers.kookie
    ) {
      res.setHeader(`set-cookie`, [`entry=my-cookie`]);
      res.json(res.getHeaders()[`set-cookie`]);
    }
  }
  res.send(`Foo Bar`);
}
