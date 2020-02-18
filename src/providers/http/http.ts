import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentProvider } from '../common/environment'
import { Observable } from 'rxjs';
@Injectable()

export class HttpProvider {

    apiRootUrl = this.urlProvder.getApiBaseUrl();

    constructor(
        private readonly urlProvder: EnvironmentProvider,
        private readonly http: HttpClient
    ) { }

    getSearchCar(RegistrationNumber: string, username: string): Observable<any> {
        console.log({ RegistrationNumber: RegistrationNumber, username: username })
        return this.http.post(this.apiRootUrl + '/searchCar', { RegistrationNumber: RegistrationNumber, username: username });
    }

}
