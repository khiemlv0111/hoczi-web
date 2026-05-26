import crypto from 'crypto';
import { User } from '../entities/User';
import axios from 'axios';
import { Request, Response } from 'express'

import * as UAParser from 'ua-parser-js';

export function generateRandomCode(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateRandomString(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz01.23456789_-';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}


export function generateFingerprint(ip: string, userAgent: string) {
  return crypto.createHash('sha256').update(ip + userAgent).digest('hex');
}


export function generateDigitCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
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
export async function getClientInfo(req: Request, res: Response): Promise<any> {

  try {
    // Lấy IP từ proxy hoặc socket
    const forwarded = req.headers['x-forwarded-for'];
    const ip =
      typeof forwarded === 'string'
        ? forwarded.split(',')[0].trim()
        : req.socket.remoteAddress || '';

    // Lấy user-agent từ headers
    const userAgent = req.headers['user-agent'] || '';
    // const parser = new UAParser();
    const parser = new UAParser.UAParser();
    const ua = parser.setUA(userAgent).getResult();

    // Gọi API để lấy vị trí địa lý từ IP
    const geoRes = await axios.get(`http://ip-api.com/json/${ip}`);
    const geo = geoRes.data;

    // Trả về thông tin tổng hợp
    return {
      ip: ip,
      location: `${geo.city}, ${geo.country}`,
      device: ua.device.model || ua.device.type,
      os: ua.os.name || 'Unknown',
      browser: ua.browser.name || 'Unknown',
    };
  } catch (err) {
    console.error('Error getting client info:', err);
    return res.status(500).json({ error: 'Failed to get client info' });
  }

}

export function generateRandomEmail(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `user_${randomString}@gmail.com`;
}


export function getUsernameFromEmail(email: string): string {
  return email.split("@")[0];
}


export function randomVietnameseFullName(gender?: "male" | "female"): string {
    const lastNames = [
        "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh",
        "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ"
    ];

    const maleMiddle = ["Văn", "Hữu", "Đức", "Quang", "Minh"];
    const femaleMiddle = ["Thị", "Ngọc", "Thanh"];

    const maleFirst = [
        "An", "Bình", "Dũng", "Hải", "Hùng",
        "Khánh", "Long", "Nam", "Phúc", "Quân", "Tuấn"
    ];

    const femaleFirst = [
        "Châu", "Hà", "Hạnh", "Linh", "Ngọc",
        "Trang", "Vy", "Yến"
    ];

    const random = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    const selectedGender =
        gender || (Math.random() > 0.5 ? "male" : "female");

    const middle =
        selectedGender === "male"
            ? random(maleMiddle)
            : random(femaleMiddle);

    const first =
        selectedGender === "male"
            ? random(maleFirst)
            : random(femaleFirst);

    return `${random(lastNames)} ${middle} ${first}`;
}


export function makeEmailFromFullName(fullName: string): string {
    if (!fullName) return "";

    // bỏ dấu tiếng Việt
    const removeVietnameseTones = (str: string) =>
        str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");

    // clean string
    const clean = removeVietnameseTones(fullName)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

    const parts = clean.split(" ");

    if (parts.length === 0) return "";

    const lastName = parts[0]; // họ
    const firstName = parts[parts.length - 1]; // tên
    const middle = parts.slice(1, -1).join(""); // tên đệm

    const emailName = `${firstName}${middle}${lastName}`;

    return `${emailName}${generateRandomString(5)}@gmail.com`;
}