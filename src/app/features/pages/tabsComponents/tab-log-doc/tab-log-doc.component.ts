import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab-log-doc",
  templateUrl: "./tab-log-doc.component.html",
  styleUrls: ["./tab-log-doc.component.scss"]
})
export class TabLogDocComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLog();
  }

  path: Object;

  public getLog() {
    return this.http
      .get("http://localhost:8080/testdoc/log/")
      .subscribe(risp => {
        console.log("get log method", risp);
        this.path = risp;
      });
  }
}
