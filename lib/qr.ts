import QRCode from 'qrcode';
import { config } from './config';

export async function generateQRCode(
  data: string,
  options?: { width?: number; margin?: number }
): Promise<string> {
  const qrCodeDataURL = await QRCode.toDataURL(data, {
    width: options?.width || 300,
    margin: options?.margin || 1,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  });
  return qrCodeDataURL;
}

export function generateVerificationURL(productCode: string): string {
  return `${config.app.url}/verify/${productCode}`;
}

