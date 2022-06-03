import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';


//Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es'
import localeJp from '@angular/common/locales/ja'
import localeAr from '@angular/common/locales/ar'

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeJp);
registerLocaleData(localeAr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
