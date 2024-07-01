import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { Name, Surname, Email, Message, title1, title2 } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: Email,
      to: 'info@flowless.co.in',
      subject: `Flowless - ${Name}`,
      html: `<h1 style="margin-bottom: 1rem; font-size: 2.25rem; font-weight: 900; line-height: 1; letter-spacing: -0.05em; color: #212529; text-decoration: none;">
                    ${title2} <span style="text-decoration: underline 3px offset(3px) #3f577f;">${title1}</span>
                </h1>
              <table style="width: 100%; border-collapse: collapse; border: 1px solid #3182ce;">
                  <thead>
                    <tr style="background-color: #3182ce; color: white;">
                      <th style="border: 1px solid #3182ce; padding: 8px;">Key</th>
                      <th style="border: 1px solid #3182ce; padding: 8px;">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid #3182ce; padding: 8px;">Name</td>
                      <td style="border: 1px solid #3182ce; padding: 8px;">${Name}</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #3182ce; padding: 8px;">Surname</td>
                      <td style="border: 1px solid #3182ce; padding: 8px;">${Surname}</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #3182ce; padding: 8px;">Email</td>
                      <td style="border: 1px solid #3182ce; padding: 8px;">${Email}</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #3182ce; padding: 8px;">Message</td>
                      <td style="border: 1px solid #3182ce; padding: 8px;">${Message}</td>
                    </tr>
                  </tbody>
                </table>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}