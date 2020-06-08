import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CartService} from '../cart.service'
import {Observable} from 'rxjs'
import { ISticker } from '../classes/isticker';
import { StickerComponent } from '../sticker/sticker.component';
import { async } from 'q';


@Component({
  selector: 'shoppingcart',
  template: `
  <p *ngIf="shoppingCartItems$|async as stickers">
  You have {{stickers.length}} items in your bag
</p>
<sticker *ngFor="let sticker of (shoppingCartItems$|async)" [sticker]="sticker">
</sticker>
<p>Total: {{getTotal() | async}}</p>
`,

  styleUrls: ['./shopping-cart-component.component.css']
})
export class ShoppingCartComponentComponent implements OnInit {


  public shoppingCartItems$: Observable<ISticker[]>;

  public shoppingCartItems: ISticker[] = [];
  
  
   
  
  constructor(private cartService: CartService) { 
  }

  async ngOnInit() {
    this.shoppingCartItems$ = this.cartService.getItems();
  }

  
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(sticker: ISticker) {
    this.cartService.removeFromCart(sticker);
  }



}
