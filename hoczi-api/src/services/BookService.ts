import { bookRepository } from "../repositories/bookRepository";
import { bookTopicRepository } from "../repositories/bookRepository";

export class BookService {
    async createBook(userId: number, data: any) {

        const newBook = await bookRepository.createBook(userId, data);
        
        await bookTopicRepository.saveBookTopic({
            book_id: newBook.id,
            topic_id: data.topicId,

        });
        return newBook
    }

}