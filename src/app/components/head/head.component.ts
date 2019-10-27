import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/brewery.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { ListBreweryAction } from '../../actions/brewery.action';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {

  }

}
