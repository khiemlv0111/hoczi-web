import { AppDataSource } from '../data-source';
import { Book } from '../entities/Book';
import { BookTopic } from '../entities/BookTopic';

class BookRepository {
    private get repo() {
        return AppDataSource.getRepository(Book);
    }


    async createBook(userId: number, data: Partial<Book>) {
        return await this.repo.save({ ...data, created_by: userId });

    }

    async pageDetail(slug: string) {
        return this.repo.findOne({ where: { slug } });
    }

    async findByTopicIds(topicIds: number[]) {
        if (!topicIds.length) return [];
        return await this.repo
            .createQueryBuilder('book')
            .innerJoin('book.book_topics', 'bt', 'bt.topic_id IN (:...topicIds)', { topicIds })
            .leftJoinAndSelect('book.book_topics', 'book_topic')
            .leftJoinAndSelect('book_topic.topic', 'topic')
            .getMany();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['book_topics', 'book_topics.topic'] });
    }


}

class BookTopicRepository {
    private get repo() {
        return AppDataSource.getRepository(BookTopic);
    }


    async saveBookTopic(data: Partial<BookTopic>) {
        return await this.repo.save({ ...data });

    }

    // async pageDetail(slug: string) {
    //     return this.repo.findOne({ where: { slug } });
    // }


}

export const bookRepository = new BookRepository();
export const bookTopicRepository = new BookTopicRepository();