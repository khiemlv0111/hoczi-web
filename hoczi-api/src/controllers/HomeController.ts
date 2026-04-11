import { Request, Response } from 'express'
export class HomeController {
    

    async homePage(req: Request, res: Response) {
        // const mnemonic = generateMnemonic(wordlist);

        // const account = mnemonicToAccount(mnemonic);

//         console.log('Private Key:', account);
// console.log('Address:', account.address);
// console.log('Seed phrase:', mnemonic);
// console.log('account phrase:', account.publicKey);

        return res.json({success: true, message: "Home Page",})
    }
}
