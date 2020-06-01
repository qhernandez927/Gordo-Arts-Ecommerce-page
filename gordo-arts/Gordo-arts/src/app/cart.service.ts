import { Injectable } from '@angular/core';
import {ISticker} from './classes/isticker';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
// import {of} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<ISticker[]> = new BehaviorSubject([]);
  private itemsInCart: ISticker[] = [];


  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
   }

   public addToCart(item: ISticker){
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
   }

   public getItems(): Observable<ISticker[]> {
    return this.itemsInCartSubject;
   }
}
