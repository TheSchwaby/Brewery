import { Action } from '@ngrx/store';
import { Brewery } from '../models/brewery.model';

export enum BreweryActionTypes {
    LIST_BREWERY = '[BREWERY] List',
    LIST_BREWERY_SUCCESS = '[BREWERY] List success',
    LIST_BREWERY_FAILURE = '[BREWERY] List failure',
    OPEN_BREWERY = '[BREWERY] Open',
    SEARCH_BREWERY = '[BREWERY] Search',
    SEARCH_BREWERY_SUCCESS = '[BREWERY] Search success',
    SEARCH_BREWERY_FAILURE = '[BREWERY] Search failure'
}

export class ListBreweryAction implements Action {
    readonly type = BreweryActionTypes.LIST_BREWERY;
    constructor() {}
}
export class ListBrewerySuccessAction implements Action {
    readonly type = BreweryActionTypes.LIST_BREWERY_SUCCESS;
    constructor( public payload: Array<Brewery>) {}
}
export class ListBreweryFailureAction implements Action {
    readonly type = BreweryActionTypes.LIST_BREWERY_FAILURE;
    constructor( public payload: Error) {}
}

export class OpenBreweryAction implements Action {
    readonly type = BreweryActionTypes.OPEN_BREWERY;
    constructor( public payload: Brewery) {}
}

export class SearchBreweryAction implements Action {
    readonly type = BreweryActionTypes.SEARCH_BREWERY;
    constructor( public payload: string) {}
}

export class SearchBrewerySucessAction implements Action {
    readonly type = BreweryActionTypes.SEARCH_BREWERY_SUCCESS;
    constructor( public payload: Brewery) {
    }
}
export class SearchBreweryFailureAction implements Action {
    readonly type = BreweryActionTypes.SEARCH_BREWERY_FAILURE;
    constructor( public payload: Error) {
    }
}

export type BreweryAction = OpenBreweryAction
| ListBreweryAction
| ListBrewerySuccessAction
| ListBreweryFailureAction
| SearchBreweryAction
| SearchBrewerySucessAction
| SearchBreweryFailureAction;
