import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {log} from "util";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("AlennLab").setDescription("Some documentation")
      .setVersion("1.0.0").addTag("Valentyn Kurylo").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/aleannLab", app, document)

  await app.listen(3000).then(v => {console.log("Server started")});
}
bootstrap();
