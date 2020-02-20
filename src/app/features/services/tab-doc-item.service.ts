import { Injectable } from "@angular/core";
import { TabItem } from "../pages/tab/tab-item";

@Injectable({
  providedIn: "root"
})
export class TabDocItemService {
  constructor() {}

  public getDocItem(): TabItem[] {
    return [new TabItem("Riepilogo", true), new TabItem("Dettaglio", false)];
  }
}
