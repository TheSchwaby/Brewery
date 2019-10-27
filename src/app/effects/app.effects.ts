import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ListBreweryAction, BreweryActionTypes, ListBrewerySuccessAction, ListBreweryFailureAction } from '../actions/brewery.action';
import { BreweryService } from '../brewery.service';
import { BreweryState } from '../reducers/brewery.reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private breweryService: BreweryService) { }

  @Effect() loadBreweries = this.actions$.pipe(
    ofType<ListBreweryAction>(BreweryActionTypes.LIST_BREWERY),
    mergeMap(
      () => this.breweryService.getBreweryList().pipe(
        map(data => new ListBrewerySuccessAction(data)),
        catchError(error => of(new ListBreweryFailureAction(error)))
      )
    )
  );

  // other actions shall be implemented
}
