import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input('nodes') nodes;
  private _options: { width, height } = { width: 800, height: 600 };

  constructor() { }

  ngOnInit() {
  }

}
