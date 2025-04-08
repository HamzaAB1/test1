import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http: HttpClient) { }

  getMarsData() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
  }
}
