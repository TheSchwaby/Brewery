import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Brewery } from 'src/app/models/brewery.model';
import { SearchBreweryAction } from 'src/app/actions/brewery.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  searchBreweryCtrl = new FormControl();
  filteredBrewery: any;
  isLoading = false;
  errorMsg: string;

  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.searchBreweryCtrl.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.errorMsg = '';
        this.filteredBrewery = [];
        this.isLoading = true;
      }),
      switchMap(value => this.http.get('https://api.openbrewerydb.org/breweries/autocomplete?query=' + value)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )
      )
    )
    .subscribe(data => {
      if (data === undefined) {
        this.errorMsg = data.toString();
        this.filteredBrewery = [];
      } else {
        this.errorMsg = '';
        this.filteredBrewery = data;
      }

    });

  }
  navToBreweries() {
    this.router.navigate(['breweries']);
  }

  navToId(brewery: Brewery) {
    this.store.dispatch(new SearchBreweryAction(brewery.id));
    this.router.navigate(['breweries', brewery.id]);
  }
}
