import { parse, serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export function setLocaleCookie(locale: string) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 năm
}

export function getLocaleFromCookie() {
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith('locale='));

  return match ? match.split('=')[1] : 'vi';
}

type CookieOptions = {
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
  maxAge?: number;
  expires?: Date;
  domain?: string;
};

export function setCookieUniversal(
  name: string,
  value: string,
  options: CookieOptions = {},
  res?: NextApiResponse,
) {
  const cookieStr = serialize(name, value, {
    path: "/",
    sameSite: "lax",
    ...options,
  });

  if (typeof window === "undefined") {
    if (res) {
      let currentCookies = res.getHeader("Set-Cookie") || [];
      if (!Array.isArray(currentCookies))
        currentCookies = [currentCookies as string];
      res.setHeader("Set-Cookie", [...currentCookies, cookieStr]);
    } else {
      throw new Error("Missing `res` in SSR context for setting cookie.");
    }
  } else {
    document.cookie = cookieStr;
  }
}

export function getCookieUniversal(
  name: string,
  req?: NextApiRequest,
): string | undefined {
  if (typeof window === "undefined") {
    if (!req)
      throw new Error("Missing `req` in SSR context for getting cookie.");
    const cookies = parse(req.headers.cookie || "");
    return cookies[name];
  } else {
    const cookieString = document.cookie;
    const cookies = Object.fromEntries(
      cookieString.split("; ").map((c) => {
        const [key, ...v] = c.split("=");
        return [key, v.join("=")];
      }),
    );
    return cookies[name];
  }
}

export function deleteCookieUniversal(name: string, res?: NextApiResponse) {
  const cookieStr = serialize(name, "", {
    path: "/",
    maxAge: -1,
  });

  if (typeof window === "undefined") {
    if (!res)
      throw new Error("Missing `res` in SSR context for deleting cookie.");

    let currentCookies = res.getHeader("Set-Cookie") || [];
    if (!Array.isArray(currentCookies))
      currentCookies = [currentCookies as string];
    res.setHeader("Set-Cookie", [...currentCookies, cookieStr]);
  } else {
    document.cookie = cookieStr;
  }
}
