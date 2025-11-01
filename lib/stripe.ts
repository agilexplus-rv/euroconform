import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-10-29.clover',
  typescript: true,
});

// Stripe webhook signature verification
export function verifyWebhookSignature(
  payload: string,
  signature: string
): Stripe.Event {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not set');
  }
  
  return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
}

export function formatAmountFromStripe(amount: number): number {
  return amount / 100;
}

export function formatAmountForStripe(amount: number): number {
  return Math.round(amount * 100);
}

