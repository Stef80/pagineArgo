import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-misure",
  templateUrl: "./tab-misure.component.html",
  styleUrls: ["./tab-misure.component.scss"]
})
export class TabMisureComponent implements OnInit {
  path: Object;
  lente: boolean = false;
  conferma_chiamata: boolean = false;
  misure_obj = {
    codPunto: "",
    periodo_dal: null,
    periodo_al: null
  };
  params: HttpParams;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMisure();
  }

  public getMisure() {
    this.http.get("http://localhost:8080/testdoc/misure").subscribe(ris => {
      this.path = ris;
      this.conferma_chiamata = true;
    });
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.misure_obj.codPunto = form.form.value.codice_punto;
    this.misure_obj.periodo_dal = form.form.value.periodo_dal || "";
    this.misure_obj.periodo_al = form.form.value.periodo_al || "";
    this.params = new HttpParams()
      .set("codPunto", this.misure_obj.codPunto)
      .set("periodoD", this.misure_obj.periodo_dal)
      .set("periodoAl", this.misure_obj.periodo_al);

    this.http
      .get("http://localhost:8080/testdoc/misure", { params: this.params })
      .subscribe(ris => {
        this.path = ris;
        this.conferma_chiamata = true;
      });
  }
}
