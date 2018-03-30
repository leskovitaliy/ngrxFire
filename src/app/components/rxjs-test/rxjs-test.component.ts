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

  // private _checkStatusSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    const observer = {
      next: (data) => {
        console.log(data);
      },
      complete: () => {
        console.log('Done');
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    };

    const arrayObservable = this.createObservable((obs) => {
      [1, 2, 3, 4, 5].forEach(obs.next);
      obs.complete();
      // document.addEventListener('click', next);
    });

    const intervalObservable = this.createObservable((obs) => {
        // document.addEventListener('click', next);
        let counts = 0;

        const intervalId = setInterval(() => {
          counts++;
          obs.next(counts);

          if (counts > 5) {
            clearInterval(intervalId);
            obs.complete();
          }
        }, 300);
      }
    );


    arrayObservable.subscribe(observer);
    intervalObservable
      .map(x => x * 10)
      .subscribe(observer);
  }

  createObservable(subscribeFn) {
    return {
      subscribe: subscribeFn,
      map: this.mapFn
    };
  }

  mapFn(transformationFn) {
    const inputObservable = this;
    const outputObservable = this.createObservable((obs) => {
      inputObservable.subscribe({
        next: (x) => obs.next(transformationFn(x)),
        complete: () => obs.complete(),
        error: (err) => obs.error(err)
      });
    });

    return outputObservable;
  }

}
