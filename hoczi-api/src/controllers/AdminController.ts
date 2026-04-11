import { Request, Response } from 'express'
// import { RequestValidator } from '../helpers/requestValidator';
// import { ChangePasswordRequest } from '../dto/user.dto';
// import { userRepository } from '../repositories/userRepository';
import { BadRequestError } from '../helpers/api-erros';

import bcrypt from 'bcrypt'
import { RequestValidator } from '../helpers/requestValidator';

export class AddminController {



    async homePage(req: Request, res: Response) {
        // const mnemonic = generateMnemonic(wordlist);

        // const account = mnemonicToAccount(mnemonic);

        //         console.log('Private Key:', account);
        // console.log('Address:', account.address);
        // console.log('Seed phrase:', mnemonic);
        // console.log('account phrase:', account.publicKey);

        return res.json({ success: true, message: "Home Page", })
    }

    
}
