import { CollectionViewer } from "@angular/cdk/collections";
import { DataSource } from "@angular/cdk/table";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { TimelineDataService } from './timeline-data-service.service';
export interface TimelineData {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export class TimelineDataSource implements DataSource<TimelineData> {

  private lessonsSubject = new BehaviorSubject<TimelineData[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private timelineDataService: TimelineDataService) {}

  connect(collectionViewer: CollectionViewer): Observable<TimelineData[]> {
      return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.lessonsSubject.complete();
      this.loadingSubject.complete();
  }

  loadLessons(id: string, filter = '',
              sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

      this.loadingSubject.next(true);

      this.timelineDataService.findLessons(id, filter, sortDirection,
          pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }    
}
