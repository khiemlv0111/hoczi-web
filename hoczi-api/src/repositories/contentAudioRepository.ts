import { settings } from 'cluster';
import { AppDataSource } from '../data-source';
// import { ContentAudio } from '../entities/ContentAudio';
import { ContentAudio } from '../entities/ContentAudio';

class ContentAudioRepository {
    private get repo() {
        return AppDataSource.getRepository(ContentAudio);
    }


    async createContentAudio(data: Partial<ContentAudio>) {
       
       return await this.repo.save({ ...data});
  
    }

    async contentAudioDetail(id: number) {
        return this.repo.findOne({ where: { id } });
    }


}

export const contentAudioRepository = new ContentAudioRepository();
