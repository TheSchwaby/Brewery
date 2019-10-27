import { Brewery } from '../models/brewery.model';
import { BreweryAction, BreweryActionTypes } from '../actions/brewery.action';

export interface BreweryState {
    list: Brewery[];
    toOpen: Brewery;
    loading: boolean;
    error: Error;

}

const initialState: BreweryState = {
    list: [],
    loading: false,
    toOpen: undefined,
    error: undefined
};

export function BreweryReducer(state: BreweryState = initialState, action: BreweryAction) {

    switch (action.type) {
        case BreweryActionTypes.LIST_BREWERY:
            return { ...state, loading: true};
        case BreweryActionTypes.LIST_BREWERY_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        case BreweryActionTypes.LIST_BREWERY_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case BreweryActionTypes.OPEN_BREWERY:
            return { ...state, loading: true, toOpen: action.payload};
        default:
            return state;
    }

}
