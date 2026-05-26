import { AppDataSource } from '../data-source';
import { Page } from '../entities/Page';

class PageRepository {
    private get repo() {
        return AppDataSource.getRepository(Page);
    }


    async createPage(userId: number, data: Partial<Page>) {
       return await this.repo.save({ ...data, user_id: userId });
  
    }

    async pageDetail(slug: string) {
        return this.repo.findOne({ where: { slug } });
    }


}

export const pageRepository = new PageRepository();