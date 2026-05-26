import { Router, Request, Response } from 'express'
import { HomeController } from '../controllers/HomeController';
// import { HomeController } from '../controllers/HomeController';
// import { sendMessage } from '../kafka/producer';
// import { sendMessage } from '../kafka/kafka.producer';
// import { HomeController } from '../controllers/HomeController';

const homeRoutes = Router();

homeRoutes.get('/', new HomeController().homePage);
homeRoutes.post('/send-message', async (res: Response, req: Request) => {
    // const data = req.body;

    const order = req.body;

    // await sendMessage("test-topic", data);

    // Publish event lên Kafka
    // await sendMessage('order-created', {
    //     orderId: order.id,
    //     userId: order.userId,
    //     timestamp: new Date().toISOString(),
    // });

    res.json({
        success: true,
        status: "message sent"
    });
});

// homeRoutes.get('/get-client-info', new UserController().getClientData);





export default homeRoutes;