import nodemailer from "nodemailer";
import logo from "../../../public/img_mail.png";

export default async (req, res) => {
  // console.log('rer:', req.body);
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.lvconstructora.cl",
      port: 465,
      secure: true,
      //service: 'Gmail', // o tu proveedor de correo electrónico preferido
      auth: {
        user: "contacto@lvconstructora.cl",
        pass: "Pablo.avc0",
      },
      // logger: true, // Habilita el registro de nodemailer
      // debug: true, // Activa el modo debug
    });

    const mailOptions = {
      from: "contacto@lvconstructora.cl",
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.message,
      html: `
      <table style="width: 100%; border-collapse: collapse; display: flex; justify-content: center; align-items: center;text-align: center;">
      <tr>
        <td style="text-align: center;">
          <div style="position: relative; width: 70%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
            <a href="https://lvconstructora.cl/" target="_blank" rel="noopener">
              <img style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://eelwces.stripocdn.email/content/guids/CABINET_a476daa5b0a44fc43d6f19c7f0e5bc1f3e23713aa59ea8a238a4a787c290f509/images/blue_simple_corporate_email_header.png" alt="logo-email" >
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="text-align: center;">
          <div style="width: 70%;">
            <h3 style="margin-top: 2rem;">Has recibido un mensaje de contacto</h3>
            <p style="text-align: justify;"><strong>Nombre:</strong> ${req.body.name}</p>
            <p style="text-align: justify;"><strong>Email:</strong> ${req.body.email}</p>
            <p style="text-align: justify;"><strong>Mensaje:</strong></p>
            <p style="text-align: justify;">${req.body.message}</p>
          </div>
        </td>
      </tr>
    </table>
    
      
      `,
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: error });
  }
};
