import {NextApiRequest, NextApiResponse} from "next";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    yourQueryId: req.query.id
  })
}