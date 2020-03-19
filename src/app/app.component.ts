import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  secondes: number;
  counterSubscription: Subscription;

  constructor() {
}

//Observable
  ngOnInit() {
    const counter = Observable.interval(1000);


    //Observateur

    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }

    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}




