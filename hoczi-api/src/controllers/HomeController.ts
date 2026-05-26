import { Request, Response } from 'express'
export class HomeController {


    async homePage(req: Request, res: Response) {

        return res.json({ success: true, message: "Home Page", })
    }
}
