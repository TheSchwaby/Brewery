import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/brewery.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { ListBreweryAction, OpenBreweryAction } from '../../actions/brewery.action';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  breweries: Observable<Array<Brewery>>;
  displayedColumns: string[] = ['Name', 'State'];
  dataSource = new MatTableDataSource();
  constructor(private store: Store<AppState>, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.breweries = this.store.select(store => store.browse.list);
    this.store.dispatch(new ListBreweryAction());
  }

  navToId(brewery: Brewery) {
    this.store.dispatch(new OpenBreweryAction(brewery));
    this.router.navigate(['breweries', brewery.id]);
  }

}
