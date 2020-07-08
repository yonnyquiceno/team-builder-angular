import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  title = 'team-builder-angular'; 

  constructor() {
  }

  ngOnInit(): void {
  }

}
