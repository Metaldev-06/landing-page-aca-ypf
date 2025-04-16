import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '@core/interfaces/card';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardsComponent {
  public card = input.required<Card>();
}
