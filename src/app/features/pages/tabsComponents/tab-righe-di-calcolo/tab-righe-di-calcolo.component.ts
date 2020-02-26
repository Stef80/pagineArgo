import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-righe-di-calcolo",
  templateUrl: "./tab-righe-di-calcolo.component.html",
  styleUrls: ["./tab-righe-di-calcolo.component.scss"]
})
export class TabRigheDiCalcoloComponent implements OnInit {
  path: Object;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRighe();
  }

  public getRighe() {
    this.http.get("http://localhost:8080/testdoc/righe").subscribe(
      ris => {
        console.log("righe ", ris);
        this.path = ris;
      },
      err => console.error(err)
    );
  }
}
