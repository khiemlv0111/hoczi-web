import { Request, Response } from 'express'
import { BookService } from '../services/BookService';
import { RequestValidator } from '../dto/requestValidator';
import { CreateBookRequest } from '../dto/book.dto';
const bookService = new BookService();

export class BookController {



    async createBook(req: Request, res: Response) {
        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateBookRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await bookService.createBook(Number(id), input);
        return res.json(response);
    }

    async getBooksByCategory(req: Request, res: Response) {
        const categoryId = Number(req.params.id);

        const response = await bookService.getBooksByCategory(categoryId);

        return res.json(response);
    }


    async getBookDetail(req: Request, res: Response) {
        const bookId = Number(req.params.id);

        const response = await bookService.getBookDetail(bookId);

        return res.json(response);
    }


}
