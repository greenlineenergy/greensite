export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, postcode, message } = req.body;
    // Process form data (e.g., send email or save to database)
    res.status(200).json({ message: 'Submission received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
