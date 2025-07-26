const Contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact form error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
