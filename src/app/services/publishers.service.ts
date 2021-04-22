import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {
  private readonly endpoint: string = 'https://localhost:44391/api/publishers';

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<PublisherDto[]> {
    return this.http.get<PublisherDto[]>(this.endpoint + "/get");
  }
}
export interface PublisherDto {
  id: number,
  name: string
}