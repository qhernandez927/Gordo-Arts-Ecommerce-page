import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
  import { from, of } from 'rxjs';
import {Observable} from 'rxjs'
import { ISticker } from '../classes/isticker';

@Component({
  selector: 'app-shopping-cart-component',
  templateUrl: './shopping-cart-component.component.html',
  styleUrls: ['./shopping-cart-component.component.css']
})
export class ShoppingCartComponentComponent implements OnInit {

  public shoppingCartItems$: Observable<ISticker[]> = of([]);
  public shoppingCartItems: ISticker[] = [];
  
  constructor(private cartService: CartService) { 
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);  
  }

  ngOnInit() {
  }

}
