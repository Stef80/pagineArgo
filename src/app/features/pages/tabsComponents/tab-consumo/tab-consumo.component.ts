import { Component, OnInit } from "@angular/core";
import { TabPaneItem } from "../../tab/tab-pane-item";
import { TabItem } from "../../tab/tab-item";
import { TabPanesService } from "src/app/features/services/tab-panes.service";
import { TabItemsService } from "src/app/features/services/tab-items.service";

@Component({
  selector: "app-tab-consumo",
  templateUrl: "./tab-consumo.component.html",
  styleUrls: ["./tab-consumo.component.scss"]
})
export class TabConsumoComponent implements OnInit {
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];

  constructor(
    private tabPaneService: TabPanesService,
    private tabItemService: TabItemsService
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getTabConsumoItem();
    this.tabPaneItems = this.tabPaneService.getTabConsumoPanes();
  }
}
