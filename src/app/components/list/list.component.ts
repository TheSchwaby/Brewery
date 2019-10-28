import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/brewery.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { ListBreweryAction } from '../../actions/brewery.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  breweries: Observable<Brewery[]>;
  displayedColumns: string[] = ['Name', 'State'];
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.breweries = this.store.select(store => store.browse.list);
    this.store.dispatch(new ListBreweryAction());
  }

  navToId(brewery: Brewery) {
    this.router.navigate(['breweries', brewery.id]);
  }

}
