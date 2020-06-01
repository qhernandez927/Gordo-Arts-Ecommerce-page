import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ISticker} from './classes/isticker';
import { Observable } from 'rxjs';

//Product Services Example 
@Injectable({
  providedIn: 'root'
})
export class StickerService {
  
  private _url: string = "http://localhost:8080/getStickerProducts"

  constructor(private http: HttpClient) { }

  public async getStickers(): Promise<Observable<ISticker[]>>{
    return await this.http.get<ISticker[]>(this._url);
  }
}
