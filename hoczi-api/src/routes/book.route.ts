import { Router } from 'express'
import { BookController } from '../controllers/BookController';

const bookRoutes = Router();

bookRoutes.post('/create-book', new BookController().createBook);
bookRoutes.get('/get-books-by-category/:id', new BookController().getBooksByCategory);
bookRoutes.get('/get-book-detail/:id', new BookController().getBookDetail);

export default bookRoutes;
