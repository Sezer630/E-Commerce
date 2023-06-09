import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { BasketModule } from './basket/basket.module';

import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JWTInterceptor } from './core/interceptors/cwt.interceptors';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    ShopModule,
    HomeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BasketModule
    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:JWTInterceptor, multi:true}
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
