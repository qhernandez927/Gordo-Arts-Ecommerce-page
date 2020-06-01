import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { StickerService } from './sticker.service';
import { ShoppingCartComponentComponent } from './shopping-cart/shopping-cart-component.component';
import {Location, CommonModule} from '@angular/common';
import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    HomeComponent,
    ShoppingCartComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [StickerService, Location, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
