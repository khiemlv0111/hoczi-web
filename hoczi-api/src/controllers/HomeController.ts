import { Request, Response } from 'express'
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { Readable } from "node:stream";

const elevenlabs = new ElevenLabsClient();


export class HomeController {


    async homePage(req: Request, res: Response) {

        return res.json({ success: true, message: "Home Page", })
    }

    async textToSpeechPage(req: Request, res: Response) {
        const text = req.body.message;
        const voiceId = req.body.voiceId || "JBFqnCBsd6RMkjVDRZzb"; // Default voice ID if not provided
        const audio = await elevenlabs.textToSpeech.convert(
            voiceId,
            {
                text: text,
                modelId: "eleven_v3",
                outputFormat: "mp3_44100_128",
            },
        );
        res.set("Content-Type", "audio/mpeg");
        Readable.fromWeb(audio as any).pipe(res);
    }
}
