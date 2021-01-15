import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExternalComponent } from './Categories/external/external.component';
import { InternalComponent } from './Categories/internal/internal.component';
import { OtherComponent } from './Categories/other/other.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"contact",component: ContactComponent},
  {path:"external",component: ExternalComponent},
  {path:"internal",component: InternalComponent},
  {path:"other",component: OtherComponent},
  {path:"product/:productId",component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
