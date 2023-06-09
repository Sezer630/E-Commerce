import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { PaginationModule  } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderTotalsComponent } from './order-totals/order-totals.component';




@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
    
  ],
  exports : [PaginationModule,
  PagingHeaderComponent,
  PagerComponent,
  CarouselModule,
  OrderTotalsComponent

]
  
  
})
export class SharedModule { }