import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { PaginationComponent } from './include/pagination/pagination.component';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

// import { WebexpressComponent } from './services/webexpress/webexpress.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'contact-us', component: ContactUsComponent},
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      { path: 'team', component: TeamComponent },
      // { path: 'header', component: HeaderComponent },
      // { path: 'footer', component: FooterComponent },
      { path: 'pagination', component: PaginationComponent },
      // { path: 'webexpress', component: WebexpressComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
