import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
import { Country } from '../model/country';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  allCountries: Country[];
  filtredCountries: Country[];
  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
      this.countryService.findCountry()
       .subscribe(
         countries => this.allCountries = countries
       );
  }

  filter(search: string) {
    this.filtredCountries = this.allCountries.filter(country => country.name.startsWith(search));
  }

}
