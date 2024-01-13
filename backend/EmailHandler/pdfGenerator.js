
import PDFDocument from 'pdfkit'

import fs from 'fs';

export default class PDFGenerator {
  constructor(appointmentData) {
    this.appointmentData = appointmentData;
  }

  generatePDF(filePath) {
    const doc = new PDFDocument();

    console.log(this.appointmentData)
    doc.text(`Dear patient your booking appointment letter is below attached`)
    doc.text(`Appointment Date: ${this.appointmentData.date}`);
    doc.text(`Patient Name: ${this.appointmentData.pateintName}`);
    
    // Add more content as needed

    doc.pipe(fs.createWriteStream(filePath));
    doc.end();
  }
}
