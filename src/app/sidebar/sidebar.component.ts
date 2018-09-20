import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {concatMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {from} from 'rxjs/observable/from';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() users = [];
  count = 0;
  currencyId = [2, 4, 5, 9, 6];
  summary = {};
  objkeys = Object.keys;

  constructor() {
  }

  ngOnInit() {
    this.countUserPeriodically();
  }

  private countUserPeriodically() {
    Observable.timer(0, 3000)
      .subscribe(
        () => {
          this.count = 0;
          from(this.currencyId).pipe(
            concatMap(v => {
              return forkJoin(of(v), this.getTransaction(v));
            }))
            .subscribe(
              (data) => {
                const [v, x] = data;
                this.count += Object.keys(x).length;
                this.summary[v] = Object.keys(x).length;
              }
            );
        }
      );
  }

  /*simulate get transaction from server*/
  private getTransaction(currencyId): Observable<any> {
    return of(this.users.filter(e => {
      return e.currencyId === currencyId;
    }));
  }
}
