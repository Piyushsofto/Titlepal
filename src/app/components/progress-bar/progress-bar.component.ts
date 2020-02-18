import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  // progress = 0.05;
  @Input('progress') progress;
  constructor() { }

  ngOnInit() { }
  onProgressRange(event) {
    console.log(event)
  }
}
