import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../cart.service'
import { StickerService } from '../sticker.service';
import { Sticker } from '../classes/sticker';

//Product details example 
// Calls sticker service and cart service 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  stickers: Sticker[] 

  constructor(private stickerService: StickerService,
              private cartService: CartService) { }

  async ngOnInit() {
    let response = this.stickerService.getStickers();
  (await response).subscribe((data)=>this.stickers=data)
  }

  public addToCart(sticker: Sticker) {
   this.cartService.addToCart(sticker) 
  }

  

}
