// import { getRequest } from '@/data/http'

import { deleteRequest, getAccessToken, getRequest, getRequestPublic, getServerRequest, postRequest, putRequest } from "../http";
import { PaginationPayload } from "../types";

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


    static async getServerUserInfo(token: string) {

        //  const response = await getServerRequest('/api/users/user-profile', true);

        // const response = await getRequest('/api/users/user-profile', true);

        const response = await getServerRequest('/api/users/user-profile', token, true);


        return response
    }


    static async register(payload: { name: string, email: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/api/auth/register', payload);
        return response
    }

    static async login(payload: { email: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/api/auth/login', payload);
        return response
    }



    static async getAllUsers(payload: PaginationPayload) {
        const params = new URLSearchParams();
        if (payload.page) params.append('page', String(payload.page));
        if (payload.limit) params.append('limit', String(payload.limit));

        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await getRequest(`/api/users/user-list${query}`, true);
        return response.data
    }

    static async deleteUser(id: number) {
        const response = await deleteRequest(`/api/users/${id}`, true);
        return response
    }

    static async updateUser(id: number, payload: { name?: string; role?: string }) {
        const response = await putRequest(`/api/users/update-user/${id}`, payload, true);
        return response
    }


    static async getSessionDetail(id: number, token?: string) {

        //  const response = await getServerRequest('/api/users/user-profile', true);

        const response = await getRequest(`/api/users/session-detail/${id}`, true);

        // const response = await getServerRequest(`/api/users/session-detail/${id}`, token, true);


        return response
    }




    static async handleLogout() {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/users/logout', {}, true);
        console.log("response: ", response);

        return response
    }

    static async getDashboardResult() {

        const response = await getRequest(`/api/users/get-dashboard-result`, true);

        return response
    }


   


}