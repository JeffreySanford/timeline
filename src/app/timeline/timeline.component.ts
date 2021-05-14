import { Component, OnInit } from '@angular/core';
export interface TimelineData {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  public displayedColumns!: string[];
  public timelineData = [
    {
      id: '000',
      name: 'The last Ice Age',
      startDate: new Date(-2600000, 1, 1),
      endDate: new Date(-11500, 1, 1)
    }
  ]

  constructor(
  ) {
  }

  ngOnInit(): void {

    // this.timelineDataSource = new TimelineDataSource(this.timelineDataService);

    this.displayedColumns = ['id', 'name', 'startDate', 'endDate'];
  }
}