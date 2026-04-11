// import { getRequest } from '@/data/http'

import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import axios from 'axios'
export class UserService {
    static async getUsers() {
        const response = await getRequest('/api/employees/employee-list', true);
        return response.data
    }

    static async getUserInfo() {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }
        const response = await getRequest('/auth/api/users/user-info', true);
        console.log("get user info response: 99999", response);
        // return response.data


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

    static async getLoginUser() {
        // const user = localStorage.getItem('')
        const response = await getRequest('/api/users/user-detail/2', true);
        return response.data.user
    }

    static async login(payload: { email: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/login', payload);
        return response.data.user
    }

    static async registerRequest(payload: { email: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/register-email-request', payload);

        return response.data
    }


    static async registerVerifyToken(payload: { token: string, username: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/register-verify-token', payload, false);
        console.log("response: ", response);

        return response
    }

    static async userRegister(payload: { token: string, email: string, username: string, fullName: string, password: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/user-register', payload, false);
        console.log("response: ", response);

        return response
    }

    static async verifyLogin(payload: { userId: number, verifyToken: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/verify-login', payload, false);
        console.log("response: ", response);

        return response
    }

    static async requestForgotPassword(email: string) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/forgot-password-request', { email }, false);
        console.log("response: ", response);

        return response
    }

    static async resetPassword(payload: { email: string, token: string, newPassword: string }) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/auth/forgot-password', payload, false);

        return response
    }

    static async getFollowingUsers(page: number, per_page: number) {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }


        const response = await getRequest('/message/api/v1/users/get-following-users', true);


        return response
    }

    static async getUsersFollowsList(page: number, per_page: number) {
        const accessToken = getAccessToken();
        // return response.data
        if (!accessToken) {
            return null
        }


        const response = await getRequest(`/message/api/v1/users/list-users-follows?page=${page}&per_page=${per_page}`, true);
        // console.log("get user info response: 99999", response);


        return response
    }

    static async getAllUsersFollows(page: number = 1, per_page: number = 20) {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }

        const response = await getRequest(`/message/api/v1/users/list-users-by-industries?page=${page}&per_page=${per_page}`, true);
        // console.log("get user info response: 99999", response);
        // return response.data


        return response
    }

    static async followOrganization(organization_id: number, is_follow: boolean) {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }
        const payload = {
            organization_id: organization_id,
            is_follow: is_follow
        };


        const response = await postRequest('/message/api/v1/users/follow-organization', payload, true);
        console.log("get user info response: 99999", response);
        // return response.data


        return response
    }

    static async getFollowOrganizationList() {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }

        const response = await getRequest('/message/api/v1/users/get-organization-list', true);
        console.log("get user info response: 99999", response);
        // return response.data


        return response
    }

    static async createOrganization(orgData: any) {
        const accessToken = getAccessToken();
        if (!accessToken) {
            return null
        }
        const payload = {
            ...orgData
        };


        const response = await postRequest('/message/api/v1/users/create-organization', payload, true);
        // console.log("get user info response: 99999", response);
        // return response.data


        return response
    }

    static async sendConnectionRequest(orgData: {}) {
        const accessToken = getAccessToken();

        const payload = {
            ...orgData,
            // requested_user_id: 100,
            message: "test send request"
        };

        // return response.data
        if (!accessToken) {
            return null
        }

        const response = await postRequest('/message/api/v1/users/send-connection-request', payload, true);
        // console.log("get user info response: 99999", response);

        return response
    }


    static async followUser(followed_user_id: number) {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }

        const payload = {
            followed_user_id: followed_user_id,
        };


        const response = await postRequest('/message/api/v1/users/follow-user', payload, true);
        console.log("get user info response: 99999", response);


        return response
    }

    static async getUserFollowers(page: number, per_page: number) {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }



        const response = await getRequest(`/message/api/v1/users/get-followers?page=${page}&per_page=${per_page}`, true);
        // console.log("get user info response: 99999", response);


        return response
    }

    static async getConnectionRequests() {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }


        const response = await getRequest("/message/api/v1/users/get-connection-requests", true);
        // console.log("get user info response: 99999", response);


        return response
    }

    static async update_connection_request(request_user_id: number, action: string) {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }

        const payload = {
            request_user_id: request_user_id,
            action: action
        };


        const response = await postRequest('/message/api/v1/users/update-connection-request', payload, true);



        return response
    }


    static async getConnectionList() {
        const accessToken = getAccessToken();

        // return response.data
        if (!accessToken) {
            return null
        }


        const response = await getRequest("/message/api/v1/users/get-connection-list", true);
        // console.log("get user info response: 99999", response);


        return response
    }

    static async getConnectionRequestedList() {
        const accessToken = getAccessToken();
        // return response.data
        if (!accessToken) {
            return null
        }
        const response = await getRequest("/message/api/v1/users/get-requested-users", true);
        // console.log("get user info response: 99999", response);
        return response
    }


    static async getUserBySlugOrUsername(slug: string) {

        let response = await getRequestPublic(`/message/api/v1/users/get-user-by-slug-or-username/${slug}`)
        return response.data
    }

    static async searchAutoComplete(keyword: string) {

        // search with 2 chars only
        let response = await getRequest(`/message/api/v1/search/autocomplete?keyword=${keyword}`, true)
        return response.data
    }

    static async searchAll(keyword: string) {

        // search with 2 chars only
        let response = await getRequest(`/message/api/v1/search/get-search-results?keyword=${keyword}`, true)
        return response.data
    }

    static async searchAllUsers(keyword?: string) {

        let query = "";

        if (keyword !== undefined) {
            const params = new URLSearchParams();
            params.append("keyword", keyword);

            query = `?${params.toString()}`;
        }

        const response = await getRequest(`/message/api/v1/users/search-users${query}`, true);
        return response.data;
    }

    static async getUserList(page?: number, limit?: number) {
        const accessToken = getAccessToken();
        // return response.data
        if (!accessToken) {
            return null
        }
        const params = new URLSearchParams();

        if (page !== undefined) params.append("page", String(page));
        if (limit !== undefined) params.append("limit", String(limit));

        const query = params.toString() ? `?${params.toString()}` : "";

        const response = await getRequest(`/message/api/v1/users/list${query}`, true);
        console.log('RESSSSSS', response)
        return response;
    }

    static async handleLogout() {
        // const user = localStorage.getItem('')
        const response = await postRequest('/auth/api/users/logout', {}, true);
        console.log("response: ", response);

        return response
    }


}