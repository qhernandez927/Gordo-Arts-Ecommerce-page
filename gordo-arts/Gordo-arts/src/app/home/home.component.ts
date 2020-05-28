import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  sticker:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {let response = this.http.get("http://localhost:8080/getStickerProducts");
  response.subscribe((data)=>this.sticker=data)
  }

}
