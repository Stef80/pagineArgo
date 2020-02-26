import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-riepilogo",
  templateUrl: "./tab-riepilogo.component.html",
  styleUrls: ["./tab-riepilogo.component.scss"]
})
export class TabRiepilogoComponent implements OnInit {
  path: Object;
  lente: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRiepilogo();
  }

  public getRiepilogo() {
    this.http.get("http://localhost:8080/testdoc/riepilogo").subscribe(risp => {
      console.log(risp);
      this.path = risp;
    });
  }
}
