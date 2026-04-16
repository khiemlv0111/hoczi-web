import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes';
import cors from 'cors';
import http from "http";
import cookieParser from 'cookie-parser';

AppDataSource.initialize().then(() => {
	const app = express();
	const PORT = process.env.PORT || 8000;

	const server = http.createServer(app);

	// Start consumer khi app khởi động
	// startConsumer().catch(console.error);

	app.use(cookieParser());

	app.use(express.json());
	const whitelist = ['http://localhost:3004', 
		'http://localhost:3000','http://localhost:3003',
		'https://hoczi.com','https://hoczi.com','https://www.hoczi.com', 'https://dev-portal.tefibit.com', 'https://portal.tefibit.com', 'https://dev.tefibit.com', 'https://tefihub.com'];
	app.use(cors({
		origin: (origin, callback) => {
			if (!origin || whitelist.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: true,
	}));


	app.use(routes);

	// runCronJobKYC(15);
	// runCronJobKYCIdNumber(15);
	// runCronJobCheckKycDocument(1);
	// runCronJobMinute(5);

	// app.use(errorMiddleware);

	
	

	// startKafkaConsumerWithRetry();

	// Start Kafka consumer
	// startKafkaConsumer().then(() => {
	// 	console.log("Kafka Consumer is running...");
	// }).catch(err => {
	// 	console.error("Error starting Kafka consumer:", err);
	// });


	return server.listen(PORT, async () => {
		console.log(`Server is running on port ${PORT}`);
		// initProject();
		// await connectProducer();
		// startKafkaConsumerWithRetry();

	})
})
