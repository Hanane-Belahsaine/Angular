import { Component, OnInit, Input } from '@angular/core';
import { Apparielservice } from '../services/appariel.service';


@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.scss']
})
export class ApparielComponent implements OnInit {

  //StatutAppariel: string = 'Etient';
// NameAppariel: string='Machine a laver';

  @Input() NameAppariel: String;
  @Input() StatutAppariel : String;
  @Input() IndexOfAppariel: number;
  @Input() id: number;
 

  constructor(private apparielservice: Apparielservice) { 
  
  }

  ngOnInit(): void {
  }

   getStatut(){
  	return this.StatutAppariel;
  }


  getColor() {
    if (this.StatutAppariel === "Allumée") {
      return 'green';
    } else if (this.StatutAppariel === "Etient")
      return 'red';
  }

  onswitchOne() {
    this.apparielservice.switchOnOne(this.IndexOfAppariel);
  }

  offswitchOne() {
    this.apparielservice.switchOffOne(this.IndexOfAppariel);
  }

}

