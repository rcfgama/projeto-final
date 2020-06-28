import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingComponent } from './dashboard-routing.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardRoutingComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}
