import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Resume } from './resume.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Resume> {
    // Using fetch here is the simplest/most robust way to load a static JSON asset.
    return from(fetch("./assets/content/cv.json").then(r => r.json() as Promise<Resume>));
  }

}
