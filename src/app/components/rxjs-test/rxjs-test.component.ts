import {Component, OnInit} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

import {map, switchMap, tap, switchMapTo} from 'rxjs/operators';
import {timer} from 'rxjs/observable/timer';
import {from} from 'rxjs/observable/from';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {interval} from 'rxjs/observable/interval';



@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {


  private _checkStatusSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    /*const source = new Observable((observer) => {
      setInterval(() => {
        observer.next(count++);
        // observer.complete();
      }, 1500);
    });

    const subject = source.subscribe(
      (value) => {
        console.log('next: ', value);
      },
      (err) => {
        console.log('err: ', err);
      },
      () => {
        console.log('completed');
      }
    );*/

   /* const sourceTimer = timer(1000, 1000);
    sourceTimer
      .pipe(
        map((count: any) => ++count)
      )
      .subscribe(value => {
        console.log(value);
      });*/

    /*const source = from([1, 2, 3, 4, 5]);
    source.pipe(
      map(val => val + 10),
    ).subscribe(val => console.log(val));*/
  }

}
