import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-competenze-fatture",
  templateUrl: "./tab-competenze-fatture.component.html",
  styleUrls: ["./tab-competenze-fatture.component.scss"]
})
export class TabCompetenzeFattureComponent implements OnInit {
  path: Object;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCompFat();
  }

  public getCompFat() {
    this.http
      .get("http://localhost:8080/testdoc/competenze")
      .subscribe(risp => (this.path = risp));
  }
}
