import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  apiURL = "http://localhost:8080/"
  constructor() { }
}
