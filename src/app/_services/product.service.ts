import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config, ProductList } from '../table';
import { Product } from '../core/product';
import { ApiAnswer } from '../core/api-answer';
import { configColumns } from '../core/config';

@Injectable()
export class ProductService {
  public getConfig(): Observable<Config> {
    return of(configColumns);
  }

  public getData(
    limit: number,
    offset: number
  ): Observable<ApiAnswer<Product>> {
    return of(ProductList).pipe(
      map((ProductList: Product[]) => {
        const result: ApiAnswer<Product> = {
          limit: limit,
          offset: offset,
          total: ProductList.length,
          result: ProductList.slice(offset, limit + offset),
        };

        return result;
      })
    );
  }

  public getProduct(index: number): Observable<Product> {
    return of(ProductList[index] as Product);
  }
}
