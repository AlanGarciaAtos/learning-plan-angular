import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountryProviderInterface } from './country-provider-interface.ts';

@Injectable({
  providedIn: 'root' // * singleton
})
export class CountryProviderService implements ICountryProviderInterface {

  /**
   * Dependency injection > add functionality a class without heritace
   * maybe delete readOnly
   */
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  provideCountryList(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.endpoints.COUNTRIES_LIST)
  }

  provideCountryByName(name: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
