import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
      path: '',
      component: ProductsComponent,
      children: [
        { path: '', redirectTo: 'all-products', pathMatch: 'full' },
        { path: 'all-products', component: AllProductsComponent },
        { path: 'product-details/:p_id', component: ProductDetailsComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductsRoutingModule { }
