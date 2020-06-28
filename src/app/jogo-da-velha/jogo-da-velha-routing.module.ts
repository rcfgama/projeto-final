import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

export const JogoDaVelhaRoutes: Routes = [
    {
        path: 'jogodavelha',
        component: JogoDaVelhaRoutingComponent,
        children: [
            {
                path: '',
                component: JogoDaVelhaComponent
            }
        ]
    }
];

@NgModule ({
    imports: [
        RouterModule.forChild(JogoDaVelhaRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class JogoDaVelhaRoutingModule {}
