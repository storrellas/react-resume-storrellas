import type {NextApiRequest, NextApiResponse} from 'next'

type ResponseData = {
  n_visitors: number
}

let n_visitors = 0
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    n_visitors ++;
    res.status(200).json({n_visitors: n_visitors});
    return
  }

  res.status(404)
}