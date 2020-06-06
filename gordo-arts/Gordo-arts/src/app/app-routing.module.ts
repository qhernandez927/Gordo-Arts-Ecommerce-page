import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponentComponent } from './shopping-cart/shopping-cart-component.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'shopping-cart', component: ShoppingCartComponentComponent},
  {path: '', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShoppingCartComponentComponent, HomeComponent]
