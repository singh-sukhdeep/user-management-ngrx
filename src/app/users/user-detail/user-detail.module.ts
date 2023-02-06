import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { UserTabsComponent } from './user-tabs/user-tabs.component';
import { MatListModule } from '@angular/material/list';
const routes: Routes = [
  {
    path: ':userEmail',
    component: UserTabsComponent,
  },
];


@NgModule({
  declarations: [
    UserDetailComponent,
    UserTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatCardModule,
    MatListModule
  ]
})
export class UserDetailModule { }
