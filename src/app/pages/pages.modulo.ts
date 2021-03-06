import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CiclosescolaresComponent } from './ciclosescolares/ciclosescolares.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.modulo';
import { FormsModule } from "@angular/forms";
// ng2- charts
import { ChartsModule } from 'ng2-charts';


import { PAGES_ROUTES } from './pages.routes';
//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CiclosescolaresComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
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
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}