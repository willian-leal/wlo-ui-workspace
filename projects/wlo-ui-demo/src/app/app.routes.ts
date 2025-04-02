import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'wlo-button',
        pathMatch: 'full'
    },
    {
        path: 'wlo-typography',
        loadComponent: () => import('./components-showcase/typography/typography-showcase.component').then(m => m.TypographyShowcaseComponent)
    },
    {
        path: 'wlo-button',
        loadComponent: () => import('./components-showcase/button/button-showcase.component').then(m => m.ButtonShowcaseComponent)
    }
];
