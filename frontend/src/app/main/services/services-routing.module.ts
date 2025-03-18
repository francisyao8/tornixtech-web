import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { WebexpressComponent } from './webexpress/webexpress.component';


const routes: Routes = [
  {
    path: '',
    // component: ServicesComponent,
    children: [
      { path: '', redirectTo: 'services-page', pathMatch: 'full'},
      { path: 'services-page', component: ServicesPageComponent },
      { path: 'webexpress', component: WebexpressComponent },
      // { path: 'pricing', component: PricingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

