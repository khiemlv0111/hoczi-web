
// import { DOMAIN } from '@/config';
// import { APP_ACCESS_TOKEN_KEY } from '@/lib/auth';
// import { getCookieUniversal } from '@/lib/cookie';
import axios from 'axios';
import { DOMAIN } from '../config';
import { getCookieUniversal } from '../lib/cookie';

export const APP_ACCESS_TOKEN_KEY = "app_access_token";

// Dùng cho SSR — không cần token
export async function getRequestPublic(url: string) {
    const URI = `${DOMAIN}${url}`;
    
    const res = await axios.get(URI);
    return res.data;
}

export const getAccessToken = () => {
   return getCookieUniversal(APP_ACCESS_TOKEN_KEY);
}

export const getServerRequest = async (url: string, accessToken: string, isPrivate: boolean) => {

    const headers: Record<string, string> = {
        'Content-Type': 'application/json'
    }
    if (isPrivate && accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const res = await axios.get(`${DOMAIN}${url}`, { headers });
    return res.data;
}


export const getRequest = async (url: string, isPrivate: boolean) => {
    const accessToken = getAccessToken();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json'
    }
    if (isPrivate && accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const res = await axios.get(`${DOMAIN}${url}`, { headers });
    return res.data;
}


export const postRequest = async (url: string, data: any, isPrivate: boolean = true) => {
    const accessToken = getAccessToken();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }
    if (isPrivate && accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const res = await axios.post(`${DOMAIN}${url}`, data, { headers });
    return res.data;
}

export const putRequest = async (url: string, data: any, isPrivate: boolean = true) => {
    const accessToken = getAccessToken();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }
    if (isPrivate && accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const res = await axios.put(`${DOMAIN}${url}`, data, { headers });
    return res.data;
}

export const deleteRequest = async (url: string, isPrivate: boolean = true) => {
    const accessToken = getAccessToken();
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }
    if (isPrivate && accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const res = await axios.delete(`${DOMAIN}${url}`, { headers });
    return res.data;
}