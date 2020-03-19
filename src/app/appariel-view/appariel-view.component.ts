import { Component, OnInit } from '@angular/core';
import { Apparielservice } from '../services/appariel.service';

@Component({
  selector: 'app-appariel-view',
  templateUrl: './appariel-view.component.html',
  styleUrls: ['./appariel-view.component.scss']
})
export class ApparielViewComponent implements OnInit {

  
  title = 'mon-premier-projet-angular';

  //AppName1 = "ORDINATEUR";
  //AppName2 = "TELEVISION";

  // StatutAppariel1 = "Allumée";
  //StatutAppariel2 = "Etient";



  OnAllume() {
    this.apparielservice.switchOnAll();
  }

  OnEtient() {
    this.apparielservice.switchOffAll();
  }

  isAuth = false;

  constructor(private apparielservice: Apparielservice) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  Appariels: any[];

  ngOnInit() {
    this.Appariels = this.apparielservice.Appariels;
  }

  //lastUpdate = new Date();

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
