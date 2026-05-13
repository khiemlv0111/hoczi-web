import { bookRepository } from "../repositories/bookRepository";
import { bookTopicRepository } from "../repositories/bookRepository";

import { topicRepository } from "../repositories/topicRepository";

export class BookService {
    async createBook(userId: number, data: any) {

        const newBook = await bookRepository.createBook(userId, data);

        await bookTopicRepository.saveBookTopic({
            book_id: newBook.id,
            topic_id: data.topicId,

        });
        return newBook
    }

    async getTopicsByCategory(categoryId: number) {
        return await topicRepository.findByCategoryId(categoryId);
    }

    async getBooksByCategory(categoryId: number) {
        const topics = await topicRepository.findByCategoryId(categoryId);
        const topicIds = topics.map((t) =>t.id);
        return await bookRepository.findByTopicIds(topicIds);

    }

    async getBookDetail(id: number) {
        return await bookRepository.findById(id);
    }

}