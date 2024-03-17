import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

import { Country, Region } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private _region: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europa,
    Region.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    return [...this._region];
  }

  getCountriesByRegion(region: Region): Observable<Country[]> {
    if (!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}`;

    return this.http.get<Country[]>(url);
  }

  getCountriesByAlphaCode(alphaCode: string): Observable<Country> {
    const url: string = `${this.baseUrl}/alpha/${alphaCode}`;

    return this.http.get<Country[]>(url).pipe(map((res) => res[0]));
  }

  getCountryBordersByCode(
    borders: string[] | undefined
  ): Observable<Country[]> {
    if (!borders || borders.length === 0) return of([]);

    const countryRequests: Observable<Country>[] = [];

    borders.forEach((code) => {
      const request = this.getCountriesByAlphaCode(code);
      countryRequests.push(request);
    });

    return combineLatest(countryRequests);
  }
}
