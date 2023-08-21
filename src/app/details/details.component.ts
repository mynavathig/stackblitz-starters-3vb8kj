import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../core/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'my-details',
  templateUrl: 'details.component.html'
})
export class DetailsComponent {

  public product$: Observable<Product>;

  constructor(
    private _apiService: ProductService,
    private _currentRoute: ActivatedRoute
  ) {
    this.product$ = _apiService.getProduct(_currentRoute.snapshot.params.index);
  }

  ngOnInit() {
  }
}