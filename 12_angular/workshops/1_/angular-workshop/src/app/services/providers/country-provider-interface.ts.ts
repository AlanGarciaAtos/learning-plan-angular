import { Observable } from "rxjs";

export interface ICountryProviderInterface {
  provideCountryList(): Observable<any[]>;

  provideCountryByName(name: string): Observable<any>;
}
