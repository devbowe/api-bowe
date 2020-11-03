const sgMail = require('@sendgrid/mail');

export default {
  send: async (data?: any) => {
    const msg = {
      to: process.env.MAIL_TO,
      from: data.email,
      subject: 'Contato pelo site',
      text: data.text,
      html: data.text,
    };

    try {
      await sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      await  sgMail.send(msg);
    } catch (error) {
      console.log("Erro SENDGRID: " + error.response.body.errors.message);
    }
  }
}
