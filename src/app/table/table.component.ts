import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Output,
  EventEmitter,
ViewChildren,
QueryList
} from '@angular/core';
import { Product } from '../core/product';
import { ProductList } from '../core/productList';
import { compare, SortableHeaderDirective, SortEvent } from '../core/sortable-header.directive';

import { Config } from './config';
import { DataTable } from './data';
import { PageRequest } from './pageRequest';

@Component({
  selector: 'my-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MyTableComponent {
  filter?: string;
  @Input()
  public config?: Config = [];

  @Input()
  public data: DataTable<any> = {
    pageActual: 0,
    lastPage: 0,
    data: []
  };

  public size = 5;
  public pageNumber = 0;
  productData: Array<any> = ProductList;
  products: Array<Product> = ProductList;

  @Output()
  public newPage: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();

  @Output()
  public selection: EventEmitter<number> = new EventEmitter<number>();

  @ViewChildren(SortableHeaderDirective)
  headers?: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting products
    if (direction === '' || column === '') {
      this.products = this.productData;
    } else {
      this.products = [...this.productData].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  public changePage(pageNum: number) {
    const num = (pageNum < 0) ? 0 :
      (pageNum >= this.data.lastPage) ? (this.data.lastPage - 1) : pageNum;

    this.pageNumber = num;

    this.newPage.emit({
      page: num,
      size: Number(this.size)
    });
  }

  public onSelect (index: number) {
    this.selection.emit(index + (this.pageNumber * this.size));
  }
}