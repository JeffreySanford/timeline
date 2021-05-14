import { Component, OnInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  datasource: MatTableDataSource<>();

  constructor() { }

  ngOnInit(): void {
  }

}
