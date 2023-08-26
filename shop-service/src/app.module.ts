import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticService } from './elastic/elastic.service';
import { S3Module } from 'nestjs-s3';
import { S3Service } from './s3/s3.service';
import { ProductModule } from './product/product.module';
import { PreauthMiddleware } from './auth/preauth.middleware';
import { AppController } from './app.controller';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
    S3Module.forRoot({
      config: {
        credentials: {
          accessKeyId: 'minio',
          secretAccessKey: 'password',
        },
        endpoint: 'http://127.0.0.1:9000',
        forcePathStyle: true,
      },
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [ElasticService, S3Service],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
