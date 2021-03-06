import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { TabItem } from "./tab-item";
import { TabPaneItem } from "./tab-pane-item";
import { TabPanesService } from "../../services/tab-panes.service";
import { TabItemsService } from "../../services/tab-items.service";
import { TabsDirective } from "./tabs.directive";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  @HostBinding("attr.class") class = "col-md-9 ml-sm-auto col-lg10 pt-3 px-4";

  @Input() tabItems: TabItem[];
  @Input() tabPaneItems: TabPaneItem[];

  @ViewChild(TabsDirective, { static: true }) tabPane: TabsDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public onTabClicked(tabItem: TabItem) {
    this.setActive(tabItem);
  }

  public loadTabPaneComponent(selIndex: number) {
    const tabPaneItem = this.tabPaneItems[selIndex];
    console.log(tabPaneItem);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tabPaneItem.component
    );
    const tabPaneRef = this.tabPane.viewContainerRef;
    tabPaneRef.clear();

    tabPaneRef.createComponent(componentFactory);
  }

  setActive(tabItem: TabItem) {
    this.tabItems.forEach((value: TabItem, index: number) => {
      value.isSelected = false;
    });

    tabItem.isSelected = true;
    this.loadTabPaneComponent(this.tabItems.indexOf(tabItem));
  }

  ngOnInit() {
    this.loadTabPaneComponent(0);
  }
}
