import { ulid } from 'ulid';

export function generateULID(): string {
  return ulid();
}

// Generate product code for verification page
export function generateProductCode(): string {
  return generateULID();
}

