import { ChangeDetectionStrategy, Component } from '@angular/core';

import ButtonComponent from '@shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroComponent {}
