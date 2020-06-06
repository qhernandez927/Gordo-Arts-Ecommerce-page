import { Injectable } from '@angular/core';
import {ISticker} from './classes/isticker';
import {BehaviorSubject, Observable, Subject, Subscriber, from} from 'rxjs';
// import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators'

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

   public removeFromCart(sticker: ISticker) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== sticker.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

   public getItems(): Observable<ISticker[]> {
    return this.itemsInCartSubject.asObservable();
   }

   public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((sticker: ISticker[]) => {
      return sticker.reduce((prev, curr: ISticker) => {
        return prev + curr.price;
      }, 0);
    }));
  }
}
