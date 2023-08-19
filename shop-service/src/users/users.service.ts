import { Injectable } from '@nestjs/common';
import { ElasticService } from 'src/elastic/elastic.service';
import { S3Service } from 'src/s3/s3.service';


export interface User {
  readonly id : number;
  readonly user_name : string;
  readonly password : string;
  readonly mail_address : string;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly elasticsearchService: ElasticService,
    private readonly awsS3Service: S3Service,
  ) {}

  async getUser(id: string): Promise<User> {
    return {
      id : 5,
      user_name : 'Dandan',
      password : 'millatiner',
      mail_address : 'dmillatiner@gmail.com'
    };
    // Implement Elasticsearch read operation
  }

  async getImage(id: string): Promise<Buffer> {
    return new Buffer('as')
    // Implement S3 read operation
  }

  async createUser(user: User): Promise<boolean> {
    return false;
    // Implement Elasticsearch write operation
  }

  async uploadImage(id: string, image: Buffer): Promise<string> {
    // Implement S3 upload operation
    return ''
  }

  async deleteUser(id: string): Promise<any> {
    // Implement Elasticsearch delete operation
  }

  async deleteImage(id: string): Promise<void> {
    // Implement S3 delete operation
  }
}
