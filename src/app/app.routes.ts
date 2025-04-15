import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/pages/home/home.component'),
    data: {
      title: 'Inicio',
      description: 'Bienvenido a la página de inicio',
      keywords: 'inicio, página de inicio, bienvenida',
      titleTab: 'Diaz Servicios SRL - Inicio',
    },
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/pages/menu/menu.component'),
    data: {
      title: 'Menú',
      description: 'Bienvenido a la página de menú',
      keywords: 'menu, página de menú, bienvenida',
      titleTab: 'Menu',
    },
  },
  {
    path: 'hotel',
    loadComponent: () => import('./features/pages/hotel/hotel.component'),
    data: {
      title: 'Hotel',
      description: 'Bienvenido a la página de Hotel',
      keywords: 'hotel, página de hotel, bienvenida',
      titleTab: 'Hotel',
    },
  },
  {
    path: 'lubricants',
    loadComponent: () =>
      import('./features/pages/lubricants/lubricants.component'),
    data: {
      title: 'Lubricantes',
      description: 'Bienvenido a la página de lubricantes',
      keywords: 'lubricantes, página de lubricantes, bienvenida',
      titleTab: 'Lubricantes',
    },
  },
  {
    path: 'promotions',
    loadComponent: () =>
      import('./features/pages/promotions/promotions.component'),
    data: {
      title: 'Promociones',
      description: 'Bienvenido a la página de promociones',
      keywords: 'promociones, página de promociones, bienvenida',
      titleTab: 'Promociones',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
