import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  constructor(private http: HttpClient) { }

  /**
   * @description method to fetch the json data
   */
  getJsonData() {
    const jsonFileUrl = `https://s3.amazonaws.com/open-to-cors/assignment.json`;
    return this.http.get(jsonFileUrl);
  }
}
