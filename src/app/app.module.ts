
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';
//modules
import { PagesModule } from "./pages/pages.modulo";

//temporal
import { FormsModule } from "@angular/forms";


//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
