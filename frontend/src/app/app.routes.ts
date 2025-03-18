import { Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { ProductsComponent } from './main/products/products.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    { path: 'about', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'products', component: ProductsComponent },
    // { path: 'services', component: ServicesComponent },
    // { path: 'services', loadChildren: () => import('./main/services/services.module').then(m => m.ServicesModule) },
    { path: 'services', loadChildren: () => import('./main/services/services.module').then(m => m.ServicesModule) },
    { path: 'team', component: TeamComponent },

    
    // {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
    // { path: 'article', component: ArticleDetailComponent },
    // { path: 'news', loadChildren: () => import('./main/news/news.module').then(m => m.NewsModule) },

];
