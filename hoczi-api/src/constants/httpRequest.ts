import axios from 'axios';

export const getRequest = (url: string, token?: string) => {
    let headers: any = {
        'Content-Type': 'application/json',
    }

    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return axios.get(`${url}`, { headers });
}

export const postRequest = (url: string, data: any, token?: string) => {
    console.log({url, data})
    let headers: any = {
        'Content-Type': 'application/json',
    }

    if (token) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return axios.post(`${url}`, data, { headers });
}