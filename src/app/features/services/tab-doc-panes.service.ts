import { Injectable } from "@angular/core";
import { TabPaneItem } from "../pages/tab/tab-pane-item";
import { TabRiepilogoComponent } from "../pages/tabsComponents/tab-documento/tab-riepilogo/tab-riepilogo.component";
import { TabDettaglioComponent } from "../pages/tabsComponents/tab-documento/tab-dettaglio/tab-dettaglio.component";

@Injectable({
  providedIn: "root"
})
export class TabDocPanesService {
  constructor() {}

  public getDocTabPanes(): TabPaneItem[] {
    return [
      new TabPaneItem(TabRiepilogoComponent),
      new TabPaneItem(TabDettaglioComponent)
    ];
  }
}
