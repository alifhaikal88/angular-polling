import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatDialogRef, MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = {};
  disableDiv = false;

  formKeys = ['test key'];

  currUser: BehaviorSubject<CurrentUser> = new BehaviorSubject<CurrentUser>({
    name: ''
  });

  xx: Observable<string>;

  constructor(public http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    localStorage.setItem('haha', 'item1');

    this.currUser.subscribe(val => console.log(val));

    this.currUser.next({ name: localStorage.getItem('haha') });

    /*
        const initData = function () {
          this.http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(users => this.users = users);
        };
        initData.call(this);
    */
    this.users = {
      headers: { normalizedNames: {}, lazyUpdate: null },
      status: 200,
      statusText: 'OK',
      url:
        'https://mx-wallet-dev.azurewebsites.net/api/Transactions?typeIds=3&statusId=1&currencyId=undefined&PageSize=undefined&PageNumber=undefined',
      ok: true,
      type: 4,
      body: [
        {
          id: 760,
          executionId: 0,
          walletId: 303,
          amount: 800,
          typeId: 3,
          statusId: 1,
          type: { name: 'Transfer', id: 3 },
          status: { name: 'Pending', id: 1 },
          creationDate: '2018-09-18T12:17:28.8157432',
          currencyId: 2,
          userId: 19,
          remark: null,
          description: null
        }
      ]
    };
  }

  toggleDiv() {
    this.disableDiv = !this.disableDiv;
  }

  remove(name) {
    this.users['body'].splice(
      this.users['body'].findIndex(u => u.id === name),
      1
    );
  }

  makeObservableForm() {
    setTimeout(_ => {}, 1000);
  }

  alertx(str) {
    alert(str);
  }

  hidopUmno() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

interface CurrentUser {
  name: string;
}
