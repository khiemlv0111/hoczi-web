import { getRequest, postRequest } from "../http";


export class BookService {
    static async getBooksByCategory(categoryId: number) {
        const response = await getRequest(`/api/books/get-books-by-category/${categoryId}`, true);
        return response;
    }

    static async createBook(payload: {
        title: string;
        description?: string;
        book_url: string;
        cover_image_url?: string;
        status: string;
        is_public: boolean;
        category_id: number;
        topic_id: number;
    }) {
        const response = await postRequest('/api/books/create-book', payload, true);
        return response;
    }

    static async getBookDetail(boodId: number) {
        const response = await getRequest(`/api/books/get-book-detail/${boodId}`, true);
        return response;
    }

}