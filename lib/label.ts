import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { config } from './config';
import { generateQRCode, generateVerificationURL } from './qr';

export interface LabelData {
  uniqueCode: string;
  productName: string;
  model?: string;
  euAddress: string;
}

// Generate SVG label
export async function generateSVGLabel(data: LabelData): Promise<string> {
  const qrDataURL = await generateQRCode(generateVerificationURL(data.uniqueCode), {
    width: 150,
    margin: 0,
  });

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <rect width="400" height="300" fill="white" stroke="#0A3D91" stroke-width="3"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="400" height="50" fill="#0A3D91"/>
  <text x="200" y="30" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">EUROCONFORM</text>
  
  <!-- EU Authorised Representative -->
  <text x="200" y="80" text-anchor="middle" fill="#0A3D91" font-family="Arial, sans-serif" font-size="12" font-weight="bold">EU AUTHORISED REPRESENTATIVE</text>
  
  <!-- Product Info -->
  <text x="20" y="115" fill="#000" font-family="Arial, sans-serif" font-size="10"><tspan font-weight="bold">Product:</tspan> ${data.productName}</text>
  ${data.model ? `<text x="20" y="135" fill="#000" font-family="Arial, sans-serif" font-size="10"><tspan font-weight="bold">Model:</tspan> ${data.model}</text>` : ''}
  
  <!-- QR Code -->
  <image href="${qrDataURL}" x="260" y="120" width="120" height="120"/>
  
  <!-- Verification Code -->
  <text x="320" y="255" text-anchor="middle" fill="#666" font-family="Arial, sans-serif" font-size="8">Code: ${data.uniqueCode}</text>
  
  <!-- EU Address -->
  <text x="200" y="270" text-anchor="middle" fill="#000" font-family="Arial, sans-serif" font-size="9">${data.euAddress} | www.euroconform.eu</text>
</svg>`.trim();
}

// Generate PDF label
export async function generatePDFLabel(data: LabelData): Promise<Uint8Array> {
  const qrDataURL = await generateQRCode(generateVerificationURL(data.uniqueCode), {
    width: 150,
    margin: 0,
  });

  // Convert base64 to image bytes
  const qrImageBytes = Buffer.from(qrDataURL.split(',')[1], 'base64');

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 300]);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Header background
  page.drawRectangle({
    x: 0,
    y: 250,
    width: 400,
    height: 50,
    color: rgb(0.039, 0.239, 0.569), // #0A3D91
  });

  // Header text
  page.drawText('EUROCONFORM', {
    x: 150,
    y: 263,
    size: 18,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });

  // Subtitle
  page.drawText('EU AUTHORISED REPRESENTATIVE', {
    x: 80,
    y: 220,
    size: 12,
    font: helveticaBold,
    color: rgb(0.039, 0.239, 0.569),
  });

  // Product info
  page.drawText('Product:', {
    x: 20,
    y: 185,
    size: 10,
    font: helveticaBold,
  });
  page.drawText(data.productName, {
    x: 20,
    y: 170,
    size: 10,
    font: helvetica,
    maxWidth: 220,
  });

  if (data.model) {
    page.drawText('Model:', {
      x: 20,
      y: 150,
      size: 10,
      font: helveticaBold,
    });
    page.drawText(data.model, {
      x: 20,
      y: 135,
      size: 10,
      font: helvetica,
      maxWidth: 220,
    });
  }

  // QR Code
  const qrImage = await pdfDoc.embedPng(qrImageBytes);
  page.drawImage(qrImage, {
    x: 260,
    y: 120,
    width: 120,
    height: 120,
  });

  // Verification code
  page.drawText(`Code: ${data.uniqueCode}`, {
    x: 250,
    y: 95,
    size: 8,
    font: helvetica,
    color: rgb(0.4, 0.4, 0.4),
  });

  // Footer
  page.drawText(`${data.euAddress} | www.euroconform.eu`, {
    x: 100,
    y: 20,
    size: 9,
    font: helvetica,
  });

  return await pdfDoc.save();
}

