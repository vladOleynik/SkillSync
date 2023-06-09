import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import helmet from "helmet";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(helmet());
    await app.listen(3003);
}
bootstrap().then(r => console.log("Server started"));
