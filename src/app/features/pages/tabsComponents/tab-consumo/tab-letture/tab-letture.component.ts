import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RicercaClientiComponent } from "../../../ricerca-clienti/ricerca-clienti.component";

@Component({
  selector: "app-tab-letture",
  templateUrl: "./tab-letture.component.html",
  styleUrls: ["./tab-letture.component.scss"]
})
export class TabLettureComponent implements OnInit {
  path: Object;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLecture();
  }

  public getLecture() {
    this.http
      .get("http://localhost:8080/testdoc/letture")
      .subscribe(risp => (this.path = risp));
  }
}
