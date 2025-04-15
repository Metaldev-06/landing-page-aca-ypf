import { ChangeDetectionStrategy, Component } from '@angular/core';

import HeroComponent from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
