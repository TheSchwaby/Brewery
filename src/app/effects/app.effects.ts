import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BreweryActions from '../actions/brewery.action';
import { BreweryService } from '../brewery.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private breweryService: BreweryService) { }

  @Effect() loadBreweries = this.actions$.pipe(
    ofType<BreweryActions.ListBreweryAction>(BreweryActions.BreweryActionTypes.LIST_BREWERY),
    switchMap(
      () => this.breweryService.getBreweryList().pipe(
        map(data => new BreweryActions.ListBrewerySuccessAction(data)),
        catchError(error => of(new BreweryActions.ListBreweryFailureAction(error)))
      )
    )
  );

  @Effect() loadBreweriesbyID = this.actions$.pipe(
    ofType<BreweryActions.SearchBreweryAction>(BreweryActions.BreweryActionTypes.SEARCH_BREWERY),
    mergeMap(
      (action) => this.breweryService.getBreweryFromId(action.payload).pipe(
        map(data => new BreweryActions.SearchBrewerySucessAction(data)),
        catchError(error => of(new BreweryActions.SearchBreweryFailureAction(error)))
      )
    )
  );

}
