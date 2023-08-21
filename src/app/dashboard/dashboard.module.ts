import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';
import { DetailsModule } from '../details/details.module';
import { SortableHeaderDirective } from '../core/sortable-header.directive';
import { ProductPipe } from '../core/country.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    TableModule,
    DetailsModule
  ],
  declarations: [ DashboardComponent, ProductPipe, SortableHeaderDirective ]
})
export class DashboardModule { }