import { Component, OnInit } from "@angular/core";
import { TabItem } from "../../tab/tab-item";
import { TabPaneItem } from "../../tab/tab-pane-item";
import { TabPanesService } from "src/app/features/services/tab-panes.service";
import { TabItemsService } from "src/app/features/services/tab-items.service";
import { TabDocPanesService } from "src/app/features/services/tab-doc-panes.service";
import { TabDocItemService } from "src/app/features/services/tab-doc-item.service";

@Component({
  selector: "app-tab-documento",
  templateUrl: "./tab-documento.component.html",
  styleUrls: ["./tab-documento.component.scss"]
})
export class TabDocumentoComponent implements OnInit {
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];

  constructor(
    private tabPaneService: TabDocPanesService,
    private tabItemService: TabDocItemService
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getDocItem();
    this.tabPaneItems = this.tabPaneService.getDocTabPanes();
  }
}
