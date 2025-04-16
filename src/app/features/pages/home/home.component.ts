import { ChangeDetectionStrategy, Component } from '@angular/core';

import HeroComponent from './components/hero/hero.component';
import ServicesSectionComponent from './components/services-section/services-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
