// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import emailjs from '@emailjs/browser';

export default async function handler (req) {
  try {
    await emailjs.sendForm (
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      req,
      process.env.PUBLIC_KEY
    );
    alert ('Message sent successfully!');
    window.location.reload (false);
  } catch (err) {
    if (!req.name || !req.email || !req.subject) {
      alert ('Name, email, or message not found!');
    } else {
      alert ('Failed to send the message, please try again!');
    }
  }
}
