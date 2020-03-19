import { Component, OnInit } from '@angular/core';
import { Apparielservice } from '../services/appariel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appariel',
  templateUrl: './single-appariel.component.html',
  styleUrls: ['./single-appariel.component.scss']
})
export class SingleApparielComponent implements OnInit {

 

  Name: string = 'Appariel';
  Statut: string = 'Status';

  constructor(private apparielservice: Apparielservice, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Name = this.apparielservice.getApparielById(+id).Name;
    this.Statut = this.apparielservice.getApparielById(+id).Statut;

  }

}
