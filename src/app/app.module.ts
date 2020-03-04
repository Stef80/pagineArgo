import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Pipe, Directive, Component } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { PagesComponent } from './app/features/pages/pages.component';
import { LoginComponent } from "./features/pages/login/login.component";
import { ModuloComponent } from "./features/pages/modulo/modulo.component";
import { MenuComponent } from "./features/pages/menu/menu.component";
import { RicercaClientiComponent } from "./features/pages/ricerca-clienti/ricerca-clienti.component";
import { SideBarComponent } from "./features/pages/side-bar/side-bar.component";
import { CardComponent } from "./features/pages/card/card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChiamataComponent } from "./features/pages/chiamata/chiamata.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { Card2Component } from "./features/pages/card2/card2.component";
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { SidebarModule } from "ng-sidebar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProvaPageComponent } from "./features/pages/prova-page/prova-page.component";
import { TabComponent } from "./features/pages/tab/tab.component";
import { TabDocumentoComponent } from "./features/pages/tabsComponents/tab-documento/tab-documento.component";
import { TabConsumoComponent } from "./features/pages/tabsComponents/tab-consumo/tab-consumo.component";
import { TabRigheDiCalcoloComponent } from "./features/pages/tabsComponents/tab-righe-di-calcolo/tab-righe-di-calcolo.component";
import { TabPagamentiComponent } from "./features/pages/tabsComponents/tab-pagamenti/tab-pagamenti.component";
import { TabLogDocComponent } from "./features/pages/tabsComponents/tab-log-doc/tab-log-doc.component";
import { TabsDirective } from "./features/pages/tab/tabs.directive";
import { TabItemsService } from "./features/services/tab-items.service";
import { TabPanesService } from "./features/services/tab-panes.service";
import { TestataDocumentoComponent } from "./features/pages/testata-documento/testata-documento.component";
import { TabRiepilogoComponent } from "./features/pages/tabsComponents/tab-documento/tab-riepilogo/tab-riepilogo.component";
import { TabDettaglioComponent } from "./features/pages/tabsComponents/tab-documento/tab-dettaglio/tab-dettaglio.component";
import { TabsDocumentoDirective } from "./features/pages/tabsComponents/tab-documento/tabs-documento.directive";
import { TabTabDocumentoComponent } from "./features/pages/tabsComponents/tab-documento/tab-tab-documento/tab-tab-documento.component";
import { TabDocItemService } from "./features/services/tab-doc-item.service";
import { TabDocPanesService } from "./features/services/tab-doc-panes.service";
import { TabCompetenzeFattureComponent } from "./features/pages/tabsComponents/tab-consumo/tab-competenze-fatture/tab-competenze-fatture.component";
import { TabLettureComponent } from "./features/pages/tabsComponents/tab-consumo/tab-letture/tab-letture.component";
import { TabMisureComponent } from "./features/pages/tabsComponents/tab-consumo/tab-misure/tab-misure.component";
import { Riepilogo } from "./features/models/riepilogo_doc";

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
    TabRigheDiCalcoloComponent,
    TabPagamentiComponent,
    TabLogDocComponent,
    TestataDocumentoComponent,
    TabsDirective,
    TabRiepilogoComponent,
    TabDettaglioComponent,
    TabsDocumentoDirective,
    TabTabDocumentoComponent,
    TabCompetenzeFattureComponent,
    TabLettureComponent,
    TabMisureComponent
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
  entryComponents: [
    TabComponent,
    TabDocumentoComponent,
    TabConsumoComponent,
    TabRigheDiCalcoloComponent,
    TabPagamentiComponent,
    TabLogDocComponent,
    TabDettaglioComponent,
    TabRiepilogoComponent,
    TabCompetenzeFattureComponent,
    TabLettureComponent,
    TabMisureComponent
  ],
  providers: [
    TabItemsService,
    TabPanesService,
    TabDocItemService,
    TabDocPanesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
