import {
  Component,
  OnInit,
  HostBinding,
  OnChanges,
  ɵɵNgOnChangesFeature
} from "@angular/core";
import { TabPaneItem } from "../tab/tab-pane-item";
import { TabItem } from "../tab/tab-item";
import { TabPanesService } from "../../services/tab-panes.service";
import { TabItemsService } from "../../services/tab-items.service";
import { HttpClient } from "@angular/common/http";
import { Documento } from "../../models/documento";

@Component({
  selector: "app-testata-documento",
  templateUrl: "./testata-documento.component.html",
  styleUrls: ["./testata-documento.component.scss"]
})
export class TestataDocumentoComponent implements OnInit {
  public tabPaneItems: TabPaneItem[];
  public tabItems: TabItem[];
  public doc: Documento;

  constructor(
    private tabPaneService: TabPanesService,
    private tabItemService: TabItemsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.tabItems = this.tabItemService.getTabItem();
    this.tabPaneItems = this.tabPaneService.getTabPanes();
    this.getDoc(32831);
  }

  public getDoc(idDoc: number) {
    return this.http
      .get<Documento>("http://localhost:8080/testdoc/" + idDoc)
      .subscribe(risp => {
        console.log("questo e risp", risp);
        this.doc = risp;
        console.log("questo e doc", this.doc);
      });
  }
}
