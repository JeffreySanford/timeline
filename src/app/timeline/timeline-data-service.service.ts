import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface TimelineData {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface CustomAction {
  type?: string,
  payload?: any;
}

@Injectable()

export class TimelineDataService {

    constructor() {}

    findLessons(
        id: string, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<TimelineData[]> {

          return new Observable();
        // return this.http.get('/api/lessons', {
        //     params: new HttpParams()
        //         .set('id', id)
        //         .set('filter', filter)
        //         .set('sortOrder', sortOrder)
        //         .set('pageNumber', pageNumber.toString())
        //         .set('pageSize', pageSize.toString())
        // }).pipe(
        //     map((res: CustomAction) =>  {
        //       debugger
        //       return res['payload']
        //     })
    }
}
