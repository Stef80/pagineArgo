import { Injectable } from "@angular/core";
import { TabPaneItem } from "../pages/tab/tab-pane-item";
import { TabDocumentoComponent } from "../pages/tabsComponents/tab-documento/tab-documento.component";
import { TabConsumoComponent } from "../pages/tabsComponents/tab-consumo/tab-consumo.component";
import { TabRigheDiCalcoloComponent } from "../pages/tabsComponents/tab-righe-di-calcolo/tab-righe-di-calcolo.component";
import { TabPagamentiComponent } from "../pages/tabsComponents/tab-pagamenti/tab-pagamenti.component";
import { TabLogDocComponent } from "../pages/tabsComponents/tab-log-doc/tab-log-doc.component";
import { TabRiepilogoComponent } from "../pages/tabsComponents/tab-documento/tab-riepilogo/tab-riepilogo.component";
import { TabDettaglioComponent } from "../pages/tabsComponents/tab-documento/tab-dettaglio/tab-dettaglio.component";

@Injectable({
  providedIn: "root"
})
export class TabPanesService {
  constructor() {}

  public getTabPanes(): TabPaneItem[] {
    return [
      new TabPaneItem(TabDocumentoComponent),
      new TabPaneItem(TabConsumoComponent),
      new TabPaneItem(TabRigheDiCalcoloComponent),
      new TabPaneItem(TabPagamentiComponent),
      new TabPaneItem(TabLogDocComponent)
    ];
  }
}
