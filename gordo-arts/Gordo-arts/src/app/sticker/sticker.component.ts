import { Component, Input } from '@angular/core';

@Component({
  selector: 'sticker',
  template: `<div class="card-body">
  <div class="row">
  <div class="col-md-3 col-sm-6">
      <figure class="card card-product-grid mt-5">
          <div class="img-wrap">
              <img class="card-img-top img-fgr img-fluid" src={{sticker.imgPath}}>
          </div>
          <figcaption class="info-wrap border-top">
              <p  class="title text-left ml-1">{{sticker.description}}</p>
              <div class="price mt-2">{{sticker.price}}</div>
          </figcaption>
      </figure> 
  </div> 
  </div>
</div> `

})
export class StickerComponent {
    @Input() sticker:  
    {id: number;
    description: string;
    price: number;
    imgPath: string;};
  

    
}
