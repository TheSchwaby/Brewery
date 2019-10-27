import { Brewery } from '../models/brewery.model';
import { BreweryAction, BreweryActionTypes } from '../actions/brewery.action';

export interface BreweryState {
    list: Brewery[];
    toOpen: Brewery;
    error: Error;

}

const initialState: BreweryState = {
    list: [],
    toOpen: undefined,
    error: undefined
};

export function BreweryReducer(state: BreweryState = initialState, action: BreweryAction) {

    switch (action.type) {
        case BreweryActionTypes.LIST_BREWERY:
            return { ...state};
        case BreweryActionTypes.LIST_BREWERY_SUCCESS:
            return { ...state, list: action.payload};
        case BreweryActionTypes.LIST_BREWERY_FAILURE:
            return { ...state, error: action.payload };
        case BreweryActionTypes.OPEN_BREWERY:
            return { ...state, toOpen: action.payload};
        case BreweryActionTypes.SEARCH_BREWERY:
            return { ...state };
        case BreweryActionTypes.SEARCH_BREWERY_SUCCESS:
            return { ...state, toOpen: action.payload};
        case BreweryActionTypes.SEARCH_BREWERY_SUCCESS:
              return { ...state, error: action.payload};
        default:
            return state;
    }

}
