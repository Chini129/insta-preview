import {HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instagram } from '../models/model';
@Injectable({
  providedIn: 'root'
})
export class InstaDataService {

  constructor(private http: HttpClient ) { }
  getInstagramData(): Observable<Instagram[]> {
    return this.http.get<Instagram[]>(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json'
    );
  }
  passInstagramData(insta:Instagram)
  {
    console.log(insta);
    localStorage.setItem("Image",insta.Image);
    localStorage.setItem("likes",insta.likes.toString());
    localStorage.setItem("image",insta.timestamp);
    location.reload();
  }
}
