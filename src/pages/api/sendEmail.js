import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { Name, Surname, Email, Message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: Email,
            to: 'sahil.patel@techivies.com',
            subject: `Flowless - ${Name}`,
            html: `<table style="width: 100%; border-collapse: collapse; border: 1px solid #3182ce;">
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