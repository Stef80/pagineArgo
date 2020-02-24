import { Injectable } from "@angular/core";
import { TabItem } from "../pages/tab/tab-item";

@Injectable({
  providedIn: "root"
})
export class TabItemsService {
  constructor() {}

  public getTabItem(): TabItem[] {
    return [
      new TabItem("Documento", true),
      new TabItem("Consumo", false),
      new TabItem("Righe di calcolo", false),
      new TabItem("Pagamenti", false),
      new TabItem("Log documento", false)
    ];
  }

  public getTabConsumoItem(): TabItem[] {
    return [
      new TabItem("Competenze Fatture", true),
      new TabItem("Letture", false),
      new TabItem("Misure", false)
    ];
  }
}
