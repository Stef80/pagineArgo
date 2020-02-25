import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-dettaglio",
  templateUrl: "./tab-dettaglio.component.html",
  styleUrls: ["./tab-dettaglio.component.scss"]
})
export class TabDettaglioComponent implements OnInit {
  path: Object;
  lente: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDettaglio();
  }

  public getDettaglio() {
    this.http.get("http://localhost:8080/testdoc/dettagli").subscribe(risp => {
      console.log(risp);
      this.path = risp;
    });
  }
}
