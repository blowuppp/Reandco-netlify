import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Only allow requests from our own pages (basic referer check)
  const referer = req.headers.referer;
  if (!referer || !referer.includes(req.headers.host)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const imagePath = path.join(process.cwd(), 'private', 'wsob.webp');
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Set headers to prevent caching
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('Content-Type', 'image/webp');
    res.send(imageBuffer);
  } catch (error) {
    res.status(404).json({ message: 'Image not found' });
  }
}
