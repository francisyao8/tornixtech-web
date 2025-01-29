import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
];
