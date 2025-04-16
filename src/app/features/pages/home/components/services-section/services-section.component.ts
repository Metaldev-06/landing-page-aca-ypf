import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Card } from '@core/interfaces/card';

import { ServicesService } from '@core/services/services.service';
import ButtonComponent from '@shared/components/button/button.component';
import CardsComponent from '@shared/components/cards/cards.component';
import TitleComponent from '@shared/components/title/title.component';

@Component({
  selector: 'app-services-section',
  imports: [CardsComponent, TitleComponent, ButtonComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesSectionComponent {
  public ServicesService = inject(ServicesService);

  public get servicesQuery() {
    return this.ServicesService.servicesQuery;
  }
}
