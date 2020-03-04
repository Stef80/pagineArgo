import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-righe-di-calcolo",
  templateUrl: "./tab-righe-di-calcolo.component.html",
  styleUrls: ["./tab-righe-di-calcolo.component.scss"]
})
export class TabRigheDiCalcoloComponent implements OnInit {
  path: Object;
  open_window: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRighe();
  }

  public getRighe() {
    this.http
      .get("http://localhost:8080/testdoc/righe")
      .subscribe(ris => (this.path = ris));
  }

  open() {
    this.open_window = !this.open_window;
  }
}
