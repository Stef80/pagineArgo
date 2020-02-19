import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Directive, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PagesComponent } from './app/features/pages/pages.component';
import { LoginComponent } from './features/pages/login/login.component';
import { ModuloComponent } from './features/pages/modulo/modulo.component';
import { MenuComponent } from './features/pages/menu/menu.component';
import { RicercaClientiComponent } from './features/pages/ricerca-clienti/ricerca-clienti.component';
import { SideBarComponent } from './features/pages/side-bar/side-bar.component';
import { CardComponent } from './features/pages/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChiamataComponent } from './features/pages/chiamata/chiamata.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { Card2Component } from './features/pages/card2/card2.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvaPageComponent } from './features/pages/prova-page/prova-page.component';
import { TabComponent } from './features/pages/tab/tab.component';
import { TabDocumentoComponent } from './features/pages/tabsComponents/tab-documento/tab-documento.component';
import { TabConsumoComponent } from './features/pages/tabsComponents/tab-consumo/tab-consumo.component';


@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
    LoginComponent,
    ModuloComponent,
    MenuComponent,
    RicercaClientiComponent,
    SideBarComponent,
    CardComponent,
    ChiamataComponent,
    Card2Component,
    ProvaPageComponent,
    TabComponent,
    TabDocumentoComponent,
    TabConsumoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
