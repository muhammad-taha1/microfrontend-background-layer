import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

@NgModule({
  providers: [
    ThemeService
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
