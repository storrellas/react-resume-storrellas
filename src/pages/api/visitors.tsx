let n_visitors = 0
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(_req: any, res: any) {
  n_visitors ++;
  res.status(200).json({n_visitors: n_visitors});
}