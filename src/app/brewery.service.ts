import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery } from './models/brewery.model';

@Injectable({
    providedIn: 'root'
})
export class BreweryService {

    berewriesURL = 'https://api.openbrewerydb.org/breweries';
    constructor(private http: HttpClient ) { }

        getBreweryList() {
            return this.http.get<Brewery[]>(this.berewriesURL);
        }

        getBreweryFromId(id: string) {
            return this.http.get<Brewery>(this.berewriesURL + '/' + id);
        }

}
