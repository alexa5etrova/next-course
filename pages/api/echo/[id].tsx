import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id?: string;
  };
}

export default function getById(req: IdNextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application / json");
  // res.end(req.query.id);

  res.json({ yourId: req.query.id });
}
