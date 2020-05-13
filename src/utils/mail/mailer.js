import ejs from 'ejs';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export const sendEmailTo = ({
  ridersName,
  ridersEmail,
  ridersPhone,
  driversEmail,
  taxisPlate,
  driversPhone,
  invoiceNo,
  invoiceDated,
  invoiceDue,
  distance,
  invoiceTotal,
  pickUpPnt,
  destination,
}) => {
  //Creating transport instance
  const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_SENDER_PASS,
    },
  };

  //Creating a Nodemailer Transport instance
  var transporter = nodemailer.createTransport(transport);

  //Verifying the Nodemailer Transport instance
  transporter.verify((error, success) => {
    if (error) {
      return 'error'
    } else {
      console.log('Server is ready to take messages');
    }
  });

  ejs.renderFile(
    __dirname + '/invoice.ejs',
    {
      ridersName,
      ridersEmail,
      ridersPhone,
      driversEmail,
      taxisPlate,
      driversPhone,
      invoiceNo,
      invoiceDated,
      invoiceDue,
      distance,
      invoiceTotal,
      pickUpPnt,
      destination,
    },
    function (err, data) {
      if (err) {
        return 'error'
      } else {
        var mainOptions = {
          from: '"YOUR_NAME" YOUR_EMAIL_ADDRESS',
          to: ridersEmail,
          subject: 'Trip invoice',
          html: data,
        };

        transporter.sendMail(mainOptions, (err, info) => {
          console.log('Sending email...');

          if (err) {
            return 'error'
          } else {
            console.log('Sent.');
          }
        });
      }
    }
  );
};
