import { Component, OnInit } from '@angular/core';
import { Ianimals } from '../../interfaces/animals.interface';
import { apiAnimalsResponse  } from '../../api/animals.api';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  public apiAnimalsResponse: Ianimals[];
  constructor() {
    this.apiAnimalsResponse = apiAnimalsResponse;
}
  ngOnInit() {
  }

}
