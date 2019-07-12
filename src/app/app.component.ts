import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'background-layer';
  userText = 'default text';
  childSliderValue = '';
  isDarkTheme: Observable<boolean>;

  constructor(private script: ScriptService, private themeService: ThemeService) {
    // this.script.load('element-a', 'element-b').then(data => {
    //   console.log(data);
    // }
    //   ).catch(error => console.error(error));
  }

  ngOnDestroy(): void {
    document.getElementById('element-a').remove();
    document.getElementById('element-b').remove();

  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  sliderValueChanged(event: any) {
    this.childSliderValue = event.detail;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
