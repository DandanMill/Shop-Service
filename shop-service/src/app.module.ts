import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticService } from './elastic/elastic.service';
import { S3Module } from 'nestjs-s3';
import { S3Service } from './s3/s3.service';

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
  ],
  controllers: [AppController],
  providers: [AppService, ElasticService, S3Service],
})
export class AppModule {}
