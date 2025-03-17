import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { WebexpressComponent } from './webexpress/webexpress.component';


const routes: Routes = [
  {
    path: '', component: ServicesPageComponent,
    children: [
      { path: '', redirectTo: 'services', pathMatch: 'full'},
      { path: 'services', component: ServicesPageComponent },
      { path: 'webexpress', component: WebexpressComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
