import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getLaunchByYear(year: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?launch_year=${year}`);
  }
}
