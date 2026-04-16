import vi from '@/messages/vi.json';
import en from '@/messages/en.json';


const messages = { vi, en };

export function getMessages(locale: string) {
  return messages[locale as keyof typeof messages] || messages.vi;
}

export function t(messages: any, path: string): string {
  return path.split('.').reduce((obj, key) => obj?.[key], messages) || path;
}