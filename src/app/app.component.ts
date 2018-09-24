import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = {};
  disableDiv = false;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    /*
        const initData = function () {
          this.http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(users => this.users = users);
        };
        initData.call(this);
    */
    this.users = {
      'headers': {'normalizedNames': {}, 'lazyUpdate': null},
      'status': 200,
      'statusText': 'OK',
      'url': 'https://mx-wallet-dev.azurewebsites.net/api/Transactions?typeIds=3&statusId=1&currencyId=undefined&PageSize=undefined&PageNumber=undefined',
      'ok': true,
      'type': 4,
      'body': [{
        'id': 760,
        'executionId': 0,
        'walletId': 303,
        'amount': 800,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T12:17:28.8157432',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 757,
        'executionId': 0,
        'walletId': 303,
        'amount': 700,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T12:17:03.9421429',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 754,
        'executionId': 0,
        'walletId': 303,
        'amount': 600,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T12:15:24.0751351',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 751,
        'executionId': 0,
        'walletId': 303,
        'amount': 400,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T12:14:50.3464625',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 740,
        'executionId': 0,
        'walletId': 303,
        'amount': 550,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T08:24:53.6612204',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 737,
        'executionId': 0,
        'walletId': 303,
        'amount': 500,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-18T08:22:08.4525909',
        'currencyId': 2,
        'userId': 19,
        'remark': null,
        'description': null
      }, {
        'id': 683,
        'executionId': 0,
        'walletId': 215,
        'amount': 1000,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-12T09:35:50.5683917',
        'currencyId': 4,
        'userId': 9,
        'remark': null,
        'description': null
      }, {
        'id': 611,
        'executionId': 0,
        'walletId': 206,
        'amount': 5000,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-05T08:22:20.0688888',
        'currencyId': 5,
        'userId': 8,
        'remark': null,
        'description': null
      }, {
        'id': 464,
        'executionId': 0,
        'walletId': 210,
        'amount': 10000,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-04T06:02:33.2898234',
        'currencyId': 9,
        'userId': 8,
        'remark': null,
        'description': null
      }, {
        'id': 411,
        'executionId': 0,
        'walletId': 49,
        'amount': 100,
        'typeId': 3,
        'statusId': 1,
        'type': {'name': 'Transfer', 'id': 3},
        'status': {'name': 'Pending', 'id': 1},
        'creationDate': '2018-09-03T17:27:02.4299099',
        'currencyId': 6,
        'userId': 7,
        'remark': null,
        'description': null
      }]
    };
  }

  toggleDiv() {
    this.disableDiv = !this.disableDiv;
  }

  remove(name) {
    this.users['body'].splice(this.users['body'].findIndex(u => u.id === name), 1);
  }


  alertx(str) {
    alert(str);
  }
}
