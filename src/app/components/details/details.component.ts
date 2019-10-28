import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { SearchBreweryAction } from 'src/app/actions/brewery.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  brewery: Observable<Brewery>;
  id: string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.brewery = this.store.select(item => item.browse.toOpen);
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SearchBreweryAction(this.id));

  }

}
