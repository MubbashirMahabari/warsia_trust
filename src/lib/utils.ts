import { siteConfig } from "@/config/site";

export function formatPhone(phone: string): string {
  // Format as +91 94497 79786 or 94497 79786
  const clean = phone.replace(/\D/g, "");
  if (clean.length === 10) {
    return `${clean.slice(0, 5)} ${clean.slice(5)}`;
  }
  return phone;
}

export function getTelLink(phone: string): string {
  const clean = phone.replace(/\D/g, "");
  return `tel:+91${clean.slice(-10)}`;
}

export function getWhatsAppLink(customMessage?: string): string {
  const phone = siteConfig.contact.whatsappNumber;
  const message =
    customMessage ||
    `Hello Warsia Educational & Social Development Trust, I would like to learn more about your humanitarian initiatives and community support.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getInitiativeWhatsAppLink(initiativeTitle: string): string {
  const message = `Hello Warsia Trust, I would like to inquire / support regarding "${initiativeTitle}". Please guide me.`;
  return getWhatsAppLink(message);
}

export function getVolunteerWhatsAppLink(data?: {
  name?: string;
  interest?: string;
  city?: string;
}): string {
  const name = data?.name ? `My name is ${data.name}. ` : "";
  const interest = data?.interest ? `I am interested in: ${data.interest}. ` : "";
  const city = data?.city ? `I am located in ${data.city}. ` : "";
  const message = `Hello Warsia Trust, I would like to join as a volunteer. ${name}${interest}${city}Please let me know how I can contribute.`;
  return getWhatsAppLink(message);
}

