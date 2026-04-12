// import { getRequest } from '@/data/http'

import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import axios from 'axios'
export class UserService {


    static async getUserInfo() {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }
        const response = await getRequest('/api/users/user-profile', true);


        return response
    }

    static async getUserData() {
        const accessToken = getAccessToken();


        // return response.data
        if (!accessToken) {
            return null
        }

        const response = await getRequest(`/message/api/v1/users/user-profile`, true);

        return response
    }


    static async register(payload: {name: string, email: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/api/auth/register', payload);
        return response
    }

    static async login(payload: { email: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/api/auth/login', payload);
        return response
    }





















    static async handleLogout() {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/users/logout', {}, true);
        console.log("response: ", response);

        return response
    }


}