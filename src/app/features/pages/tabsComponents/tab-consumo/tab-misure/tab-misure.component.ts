import { Component, OnInit } from "@angular/core";
import { Misure } from "src/app/features/models/misure";
import { HttpClient } from "@angular/common/http";
import { RicercaClientiComponent } from "../../../ricerca-clienti/ricerca-clienti.component";

@Component({
  selector: "app-tab-misure",
  templateUrl: "./tab-misure.component.html",
  styleUrls: ["./tab-misure.component.scss"]
})
export class TabMisureComponent implements OnInit {
  path: Object;
  lente: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMisure();
  }

  public getMisure() {
    this.http
      .get("http://localhost:8080/testdoc/misure")
      .subscribe(ris => (this.path = ris));
  }
}
