
import nodemailer from 'nodemailer';
import {EMAIL,EMAIL_PASS} from '../config/index'

export default class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: EMAIL,
            pass: EMAIL_PASS,
          },
        });
      }

  async sendEmailWithAttachment(attachmentPath,pateintEmail,subject,text,) {

    const mailOptions = {
      from: EMAIL,
      to: pateintEmail,
      subject: subject,
      text: text,
      attachments: [
        {
          filename: 'appointment.pdf',
          path: attachmentPath,
        },
      ],
    };
    try{
        const info = await this.transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    }catch(error){
        console.log('Error occured during sending email:',error);
    }

    
    
  }
}

