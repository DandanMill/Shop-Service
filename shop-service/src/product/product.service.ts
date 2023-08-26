import { Injectable } from '@nestjs/common';
import { FilterProductDTO } from './dtos/filter-product.dto';
import { Product } from './product.model';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor() {}

  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    throw new Error('Function without implementation');
  }

  async getProduct(id: string): Promise<Product> {
    throw new Error('Function without implementation');
  }

  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    throw new Error('Function without implementation');
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    throw new Error('Function without implementation');
  }

  async deleteProduct(id: string): Promise<any> {
    throw new Error('Function without implementation');
  }
}
