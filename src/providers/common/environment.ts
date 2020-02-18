import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EnvironmentProvider {
    apiRootUrl: any;
    phase = "development";
    // phase="production";

    constructor(public http: HttpClient) { }

    getApiBaseUrl() {
        if (this.phase == "development") {
            return this.apiRootUrl = 'http://localhost:3030/api/titlepal';
        }
        else {
            return this.apiRootUrl = '';
        }

    }
}