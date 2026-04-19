import cron from "node-cron";
import { LessonService } from "../services/LessonService";


// const SYSTEM_EMAIL = process.env.SYSTEM_EMAIL;


export const runCronJobMinute = (time: number) => {
    cron.schedule(`0 */${time} * * * *`, async () => {
        console.log(`job run every ${time} minute`);

        const lessonService = new LessonService();
        
        lessonService.checkAssignmentDueDate();
        
        
    });
}
