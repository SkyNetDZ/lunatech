import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from './model/country';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CountryService {

  constructor(private db: AngularFireDatabase) {
  }

  findCountry(): Observable<Country[]> {
    return this.db.list('countries').valueChanges()
            .map(Country.fromJsonList);
  }
}

