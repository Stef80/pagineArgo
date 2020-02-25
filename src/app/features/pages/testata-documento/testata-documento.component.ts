import { Component, OnInit, HostBinding } from "@angular/core";
import { TabPaneItem } from "../tab/tab-pane-item";
import { TabItem } from "../tab/tab-item";
import { TabPanesService } from "../../services/tab-panes.service";
import { TabItemsService } from "../../services/tab-items.service";

@Component({
  selector: "app-testata-documento",
  templateUrl: "./testata-documento.component.html",
  styleUrls: ["./testata-documento.component.scss"]
})
export class TestataDocumentoComponent implements OnInit {
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];

  constructor(
    private tabPaneService: TabPanesService,
    private tabItemService: TabItemsService
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getTabItem();
    this.tabPaneItems = this.tabPaneService.getTabPanes();
  }
}
