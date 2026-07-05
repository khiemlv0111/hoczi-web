import { Request, Response } from 'express'
import { ElevenLabsClient, play } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient();


export class HomeController {


    async homePage(req: Request, res: Response) {

        return res.json({ success: true, message: "Home Page", })
    }

    async textToSpeechPage(req: Request, res: Response) {
        const text = req.body.message;
        const audio = await elevenlabs.textToSpeech.convert(
            "JBFqnCBsd6RMkjVDRZzb", // "George" - browse voices at elevenlabs.io/app/voice-library
            {
                text: text,
                modelId: "eleven_v3",
                outputFormat: "mp3_44100_128",
            },
        );
        res.set("Content-Type", "audio/mpeg");
        await play(audio);

        return res.json({ success: true, message: "Text to Speech Page", })
    }
}
