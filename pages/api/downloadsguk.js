import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'private', 'Contact.vcf');
  try {
    const fileBuffer = await fs.readFile(filePath);
    res.setHeader('Content-Disposition', 'attachment; filename="Contact.vcf"');
    res.setHeader('Content-Type', 'text/vcard');
    res.send(fileBuffer);
  } catch (error) {
    res.status(500).send('Error downloading the file');
  }
}
