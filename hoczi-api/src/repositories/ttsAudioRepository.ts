import { AppDataSource } from '../data-source';
import { TtsAudio } from '../entities/TtsAudio';

class TtsAudioRepository {
    private get repo() {
        return AppDataSource.getRepository(TtsAudio);
    }

    async findByHash(textHash: string) {
        return this.repo.findOne({ where: { text_hash: textHash } });
    }

    // A concurrent request may have saved the same audio first; keep the existing row.
    async saveIfAbsent(data: Partial<TtsAudio>) {
        await this.repo.createQueryBuilder()
            .insert()
            .into(TtsAudio)
            .values(data)
            .orIgnore()
            .execute();
    }
}

export const ttsAudioRepository = new TtsAudioRepository();
