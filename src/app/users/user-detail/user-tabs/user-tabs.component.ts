import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-tabs',
  templateUrl: './user-tabs.component.html',
  styleUrls: ['./user-tabs.component.scss']
})
export class UserTabsComponent implements OnInit, OnDestroy {

  userDetail: User | undefined | null;
  userDetailSubscription: Subscription | undefined;
  paramsSubscription: Subscription | undefined;

  constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.paramsSubscription = this.activateRoute.params.subscribe((params: any) => {
      this.selectData(params.userEmail)
    })
  }


  selectData(emailToFind: string) {
    this.userDetailSubscription = this.store.select('users').subscribe((users) => {
      if (users) {
        this.userDetail = users.find(item => item.email === emailToFind);
      } else {
        this.userDetail = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.userDetailSubscription?.unsubscribe();
    this.paramsSubscription?.unsubscribe();
  }

}
