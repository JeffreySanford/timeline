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
  timelineData: TimelineData[] = [
    {
      id: '000',
      name: 'The last Ice Age',
      startDate: new Date(-2600000, 1, 1),
      endDate: new Date(-11500, 1, 1)
    }
  ];
  displayedColumns = ['id', 'name', 'startDate', 'endDate'];
  
  constructor() {
    
   }
  ngOnInit(): void {
  }
}