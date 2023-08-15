import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async createDocument(index: string, id: string, document: object): Promise<any> {
    return await this.elasticsearchService.index({
      index,
      id,
      body: document,
    });
  }

  async search(index: string, query: any): Promise<any> {
    return await this.elasticsearchService.search({
      index,
      body: query,
    });
  }
}
