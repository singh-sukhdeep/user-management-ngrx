import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/user-listing/user-listing.module').then(m => m.UserListingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./users/user-detail/user-detail.module').then(m => m.UserDetailModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PageNotFoundModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
