import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    private products = []

    getAll() {
        return this.products
    }

    getById(id) {
        return this.products.find(p => p.id === id)
    }

    create(productCreate: CreateProductDto) {
        this.products.push({
            ...productCreate,
            id: Date.now().toString()
        })
        return this.products
    }
}
