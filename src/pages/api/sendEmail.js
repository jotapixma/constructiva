import nodemailer from 'nodemailer';

export default async (req, res) => {
  console.log('rer:', req.body)
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // o tu proveedor de correo electrónico preferido
      auth: {
        user: 'jorgeteran22@gmail.com', //
        pass: 'hdvhznwicgecolzx',
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: 'jteran.lvc@gmail.com',
      subject: req.body.subject,
      text: req.body.message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
};