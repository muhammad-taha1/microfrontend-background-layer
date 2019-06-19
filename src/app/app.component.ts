import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'background-layer';

  constructor(private script: ScriptService) {
    this.script.load('element-a').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }

  ngOnInit(): void {

  }

}
