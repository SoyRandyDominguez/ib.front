import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
},
{
    path: 'main',
    component: MainComponent,
    data: {
        title: 'Main'
    }
},
{
    path: 'new-product',
    component: NewProductComponent,
    data: {
        title: 'New product'
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
