import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nodes:NodeGraph[] = [{x: 3, y:2}];
}

interface NodeGraph {
  x: number;
  y: number;
}