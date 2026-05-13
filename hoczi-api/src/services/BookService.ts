import { bookRepository } from "../repositories/bookRepository";
import { bookTopicRepository } from "../repositories/bookRepository";

import { topicRepository } from "../repositories/topicRepository";
import slugify from 'slugify';

export class BookService {
    async createBook(userId: number, data: any) {
        const slug = `${slugify(data.title)}-${Date.now()}`;
        const dto = {
            ...data,
            slug: slug
        }

        const newBook = await bookRepository.createBook(userId, dto);

        await bookTopicRepository.saveBookTopic({
            book_id: newBook.id,
            topic_id: data.topic_id,

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