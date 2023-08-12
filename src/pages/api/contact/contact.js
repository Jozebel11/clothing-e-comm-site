
import formData from 'form-data';
import Mailgun from 'mailgun.js';
const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';
 
export default async function handler(req, res) {

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY ,url:"https://api.eu.mailgun.net"});

const {name, email, subject, message, mobile} = req.body;

const messageData = {
 from: 'Contact Form <contact@mg.digital-presence.dev>',
 to: process.env.EMAIL,
 subject: 'New Contact Form',
 text: `You have a new Form Submission from: ${name} - ${email}.
 Mobile: ${mobile}
 Subject: ${subject}
 Message: ${message}`
};

try {
 const emailRes = await client.messages.create(DOMAIN, messageData)

} catch (err) {
 console.error('Error sending email', err);
};


 res.status(200).json({ submitted: true })
}