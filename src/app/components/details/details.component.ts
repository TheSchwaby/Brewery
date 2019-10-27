import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  brewery: Observable<Brewery>;

  constructor(private store: Store<AppState>) {
    this.brewery = this.store.select(store => store.browse.toOpen);
  }


  ngOnInit() {

  }

}
