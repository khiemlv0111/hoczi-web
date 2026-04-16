import { User } from "../entities/User";
import axios from 'axios';

import bcrypt from 'bcrypt'

import { v4 as uuidv4 } from 'uuid';

export function generateIdWithTimestamp(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 20);
  return `${timestamp}-${random}`; // ví dụ: "lbxv9j7x-9hf3k1m52jdoe4uh"
}


export function isExpired(expiredAt: string | Date): boolean {
  const expiredDate = new Date(expiredAt);
  const now = new Date();
  return now > expiredDate;
}


export function generateDigitCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


export function isValidVietnamesePhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  const normalized = cleaned.startsWith('84') ? '0' + cleaned.slice(2) : cleaned;

  // Cho phép: 03[2-9], 05[6,8,9], 07[0,6-9], 08[1-9], 09[0-9]
  const mobileVN = /^(0)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-9])\d{7}$/;

  return mobileVN.test(normalized);
}

export function isStrongPassword(password: string): boolean {
  const minLength = 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    password.length >= minLength &&
    hasLowercase &&
    hasUppercase &&
    hasNumber
  );
}


export function extractNameFromText(text: string): string | null {
  const regex = /\*\*(.+?)\*\*/;
  const match = text.match(regex);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

export function extractIdNumber(text: string): string | null {
  const cccdRegex = /\b\d{10,12}\b/;
  const match = text.match(cccdRegex);
  return match ? match[0] : null;
}

export function isUserNameMatchBankAccount(userFullName: string, bankAccountName: string): boolean {
  const normalize = (text: string) =>
    text
      .normalize('NFD')                 // Tách dấu ra khỏi chữ
      .replace(/[\u0300-\u036f]/g, '')   // Xóa hết dấu
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');             // Gom khoảng trắng

  return normalize(userFullName) === normalize(bankAccountName);
}

export async function createBSCWallet(){
  const createWalletUrl = "https://dev-api.tefibit.com/payment/api/internal/networks/network-list";

  try {
    const response = await axios.post(createWalletUrl);
    return response
    
  } catch (error) {
    return JSON.stringify(error);
  }
  
}

export async function generateHashPassword(password: string) {

        return await bcrypt.hash(password, 10);

}

const ADMIN_ROLES = ['admin', 'super_admin'] as const;
export type AdminRole = typeof ADMIN_ROLES[number];

export function isAdmin(role: string): boolean {
  return (ADMIN_ROLES as readonly string[]).includes(role);
}