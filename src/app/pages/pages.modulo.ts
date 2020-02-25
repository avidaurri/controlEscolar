import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CiclosescolaresComponent } from './ciclosescolares/ciclosescolares.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.modulo';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CiclosescolaresComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CiclosescolaresComponent,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}