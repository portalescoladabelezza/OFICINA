/**
 * Utility functions for Auto Prime.
 */

/**
 * Generates a pre-encoded WhatsApp link for secure redirecting.
 * @param phone Phone number in international format (e.g., 5521969060505)
 * @param text The prefilled text message
 */
export function getWhatsAppLink(phone: string, text: string): string {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
}
