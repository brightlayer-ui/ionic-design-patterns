import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './pages/list/data-list/data-list.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';

export type DrawerItem = {
    title: string;
    path: string;
    children?: DrawerItem[];
    component?: any;
    redirectTo?: string;
};

export const ROUTES: DrawerItem[] = [
    {
        title: 'App Bar',
        path: 'app-bar',
        children: [
            {
                title: 'Collapsible',
                path: 'collapsible',
                component: PlaceholderComponent,
            },
            {
                title: 'Search',
                path: 'search',
                component: PlaceholderComponent,
            },
        ],
    },
    {
        title: 'Empty States',
        path: 'empty-states',
        children: [
            {
                title: 'Loading',
                path: 'loading',
                component: PlaceholderComponent,
            },
        ],
    },
    {
        title: 'Form Validation',
        path: 'form-validation',
        component: PlaceholderComponent,
    },
    {
        title: 'Internationalization',
        path: 'internationalization',
        component: PlaceholderComponent,
    },
    {
        title: 'Lists',
        path: 'lists',
        children: [
            {
                title: 'Action List',
                path: 'action-list',
                component: PlaceholderComponent,
            },
            {
                title: 'Data List',
                path: 'data-list',
                component: DataListComponent,
            },
            {
                title: 'Multiselect List',
                path: 'multi-select-list',
                component: PlaceholderComponent,
            },
            {
                title: 'Sortable List',
                path: 'sortable-list',
                component: PlaceholderComponent,
            },
            {
                title: 'Status List',
                path: 'status-list',
                component: PlaceholderComponent,
            },
            {
                title: 'Responsive Table',
                path: 'responsive-table',
                component: PlaceholderComponent,
            },
        ],
    },
    {
        title: 'Overlays',
        path: 'overlays',
        children: [
            {
                title: 'Basic Bottom Sheet',
                path: 'basic-bottom-sheet',
                component: PlaceholderComponent,
            },
            {
                title: 'Complex Bottom Sheet',
                path: 'complex-bottom-sheet',
                component: PlaceholderComponent,
            },
        ],
    },
    {
        title: 'Steppers',
        path: 'steppers',
        children: [
            {
                title: 'Dynamic Stepper',
                path: 'dynamic-stepper',
                component: PlaceholderComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
