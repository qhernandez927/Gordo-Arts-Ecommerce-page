import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {Observable} from 'rxjs'
import { ISticker } from '../classes/isticker';


@Component({
  selector: 'app-shopping-cart-component',
  template: `<p *ngIf="shoppingCartItems$|async as items">
  You have {{items.length}} items in your bag
</p>
<sticker *ngFor="let sticker of (shoppingCartItems$|async)" [sticker]="sticker"></sticker>`,
  styleUrls: ['./shopping-cart-component.component.css']
})
export class ShoppingCartComponentComponent implements OnInit {

  public shoppingCartItems$: Observable<ISticker[]>;

  public shoppingCartItems: ISticker[] = [];
  

  
  constructor(private cartService: CartService) { 
  }

  async ngOnInit() {
    this.shoppingCartItems$ = this.cartService.getItems()
      
  }

  
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(sticker: ISticker) {
    this.cartService.removeFromCart(sticker);
  }



}
