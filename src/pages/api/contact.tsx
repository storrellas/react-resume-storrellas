import 'dotenv/config';

import type {NextApiRequest, NextApiResponse} from 'next'
import Mailjet from 'node-mailjet';



const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "",
  process.env.MJ_APIKEY_PRIVATE || "",
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    console.log("Sending email", req.body)

    // ---------------
    const request = mailjet
    .post('send', {version: 'v3.1'})
    .request({
      Messages: [
        {
          From: {
            Email: "storrellas@gmail.com",
            Name: "Sergi Torrellas"
          },
          To: [
            {
              Email: "storrellas+1@gmail.com",
              Name: "passenger 1"
            }
          ],
          Subject: `Message from resume web`,
          TextPart: `name: ${req.body.name} email: ${req.body.email} message: ${req.body.message}`,
        }
      ]
    })

    request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
    // ---------------

    res.status(204).send("");
    return
  }
  res.status(404).send("");
}