import nodemailer from 'nodemailer';
import {EMAIL,EMAIL_PASS} from '../config/index'



export default class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
      },
    });
  }

  sendEmail(pateintEmail,text) {
    console.log(EMAIL,EMAIL_PASS)
    const mailOptions = {

        from: EMAIL,
        to: pateintEmail,
        subject: 'Subject of the email',
        text: text
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}

