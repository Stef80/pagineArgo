import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  HostBinding
} from "@angular/core";
import { TabItem } from "../../../tab/tab-item";
import { TabsDocumentoDirective } from "../tabs-documento.directive";
import { TabPaneItem } from "../../../tab/tab-pane-item";

@Component({
  selector: "app-tab-tab-documento",
  templateUrl: "./tab-tab-documento.component.html",
  styleUrls: ["./tab-tab-documento.component.scss"]
})
export class TabTabDocumentoComponent implements OnInit {
  @HostBinding("attr.class") class = "col-md-9 ml-sm-auto col-lg10 pt-3 px-4";

  @Input() tabItems: TabItem[];
  @Input() tabPaneItems: TabPaneItem[];

  @ViewChild(TabsDocumentoDirective, { static: true })
  tabPane: TabsDocumentoDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public onTabClicked(tabItem: TabItem) {
    this.setActive(tabItem);
  }

  public loadTabPaneComponent(selIndex: number) {
    const tabPaneItem = this.tabPaneItems[selIndex];
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
