import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from 'src/app/app.routes';

import NavItemsComponent, {
  NavItem,
} from './components/nav-items/nav-items.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavItemsComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  public routes = routes?.filter((route) => route.data) as NavItem[];
}
