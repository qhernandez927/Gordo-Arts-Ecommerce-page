import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {HttpClientModule} from '@angular/common/http';
import { StickerService } from './sticker.service';
import {Location, CommonModule} from '@angular/common';
import { CartService } from './cart.service';
import { StickerComponent } from './sticker/sticker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    routingComponents,
    StickerComponent    
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
