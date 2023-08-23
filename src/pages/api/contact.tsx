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

    // ---------------
    const message = `
Name: ${req.body.name}
Email: ${req.body.email} 
Message: ${req.body.message}
    `;
    const request = mailjet
      .post('send', {version: 'v3.1'})
      .request({
        Messages: [
          {
            From: {Email: "storrellas@gmail.com", Name: "Sergi Torrellas"},
            To: [
              {Email: "storrellas@gmail.com", Name: "Sergi Torrellas"}
            ],
            Subject: `Message from resume web`,
            TextPart: message,
          }
        ]
      })

    request
      .then((result) => console.log(result.body) )
      .catch((err) => console.log(err.statusCode) )
    // ---------------

    res.status(204).send("");
    return
  }
  res.status(404).send("");
}