import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISticker } from '../classes/isticker';
import { Sticker } from '../classes/sticker';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shoppingCartItems$: Observable<ISticker[]> = of([]);

  public shoppingCartItems: Sticker[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems()

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
