import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  path: string;
  data: Data;
}

export interface Data {
  title: string;
  description: string;
  keywords: string;
  titleTab: string;
}

@Component({
  selector: 'app-nav-items',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavItemsComponent {
  public route = input.required<NavItem>();
}
