import { vocabularyRepository } from "../repositories/vocabularyRepository";
import { lessonVocabularyRepository } from "../repositories/lessonVocabularyRepository";
import { contentAudioRepository } from "../repositories/contentAudioRepository";
import { learningContentRepository } from "../repositories/learningContentRepository";
import { text } from "node:stream/consumers";


// @Column({ type: "int" })
//   content_id!: number;

//   @Column({ type: "varchar", length: 50, default: "elevenlabs" })
//   provider!: string;

//   @Column({ type: "varchar", length: 255, nullable: true })
//   voice_id?: string;

//   @Column({ type: "varchar", length: 255, nullable: true })
//   model_id?: string;

//   @Column({ type: "text" })
//   audio_url!: string;

//   @Column({ type: "varchar", length: 100, default: "audio/mpeg" })
//   mime_type!: string;

//   @Column({ type: "int", nullable: true })
//   duration_seconds?: number;

//   @Column({ type: "bigint", nullable: true })
//   file_size_bytes?: string;

//   @Column({ type: "varchar", length: 128 })
//   text_hash!: string;

//   @Column({ type: "varchar", length: 30, default: "completed" })
//   status!: string;

//   @Column({ type: "text", nullable: true })
//   error_message?: string;

//   @Column({ type: "jsonb", nullable: true })
//   settings?: Record<string, any>;


export class AudioService {

    async saveAudio(userId: number, data: any) {
        const audioUrl = data.audioUrl;
        

        const learningContent = await learningContentRepository.createLearningContent(userId, data);
        if (!learningContent) {
            throw new Error('Lesson not found');
        }
        const audioData = {
            tenant_id: 1, // Replace with actual tenant ID if available
            audio_url: audioUrl,
            voice_id: data.voiceId || null,
            content_id: learningContent.id,
            model_id: data.modelId || null,
            mime_type: data.mimeType || 'audio/mpeg',
            text_hash: data.text_hash || null,
        }

        const audioContent = await contentAudioRepository.createContentAudio(audioData);

        return audioContent;
    }

    async getAudioDetail(contentId: number) {
        return learningContentRepository.learningContentDetail(contentId);
    }

    async getAudioList(userId: number) {
        return learningContentRepository.learningContentList(userId);
    }



}