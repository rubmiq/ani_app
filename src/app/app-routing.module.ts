import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component: HomeComponent},
  {path:"home/:category",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"contact",component: ContactComponent},
  {path:"product/:productId",component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
