import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiPath: string;
  private searchedCar: string;

  constructor(private httpClient: HttpClient) {
    const env: any = environment;
    this.apiPath = env.paths.api;
    this.searchedCar = 'searchCar';
  }

  getSearchCar(reg: string, state: string, username: string) {
    console.log({ RegistrationNumber: reg, state: state })
    return this.httpClient.post<object>(`${this.apiPath}/${this.searchedCar}`, { RegistrationNumber: reg, state: state, username: username })
  }
}
