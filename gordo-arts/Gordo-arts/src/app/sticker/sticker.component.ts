import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ISticker } from '../classes/isticker';
import {CartService} from '../cart.service'
import { ShoppingCartComponentComponent } from '../shopping-cart/shopping-cart-component.component';

declare var paypal;


@Component({
  selector: 'sticker',
  template: 
      `<div class="col-md-3 col-sm-6">
      <figure class="card card-product-grid mt-5">
          <div class="img-wrap">
              <img class="card-img-top img-fgr img-fluid" src={{sticker.imgPath}}>
          </div>
          <figcaption class="info-wrap border-top">
              <p  class="title text-left ml-1">{{sticker.description}}</p>
              <div class="price mt-2">{{sticker.price}}</div>
          </figcaption>
      </figure>
      <button class="remove-item" (click)="removeItem(sticker)">Remove</button>
      </div>
      <div #paypal></div>
      `

})
export class StickerComponent implements OnInit{
    @Input() sticker:  
    {id: number;
    description: string;
    price: number;
    imgPath: string;};

    @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
    
    paidFor = false;



     constructor(private cartService: CartService,
                private userTotal: ShoppingCartComponentComponent) { 
    }
  
    public removeItem(sticker: ISticker) {
        this.cartService.removeFromCart(sticker);
      }
    

      ngOnInit() {
        paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: this.sticker.description,
                    amount: {
                      currency_code: 'USD',
                      value: this.sticker.price,
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              this.paidFor = true;
              console.log(order);
            },
            onError: err => {
              console.log(err);
            }
          })
          .render(this.paypalElement.nativeElement);
      }
    
}
