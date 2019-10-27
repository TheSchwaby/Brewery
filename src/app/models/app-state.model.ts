import { Brewery } from './brewery.model';
import { BreweryState } from '../reducers/brewery.reducer';

export interface AppState {
    readonly browse: BreweryState;

}
