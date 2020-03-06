import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RicercaClientiComponent } from "../../../ricerca-clienti/ricerca-clienti.component";
import { NgForOf } from "@angular/common";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-letture",
  templateUrl: "./tab-letture.component.html",
  styleUrls: ["./tab-letture.component.scss"]
})
export class TabLettureComponent implements OnInit {
  path: Object;
  lettura_obj = {
    codPunto: "",
    lettura_dal: null,
    lettura_al: null,
    periodo_dal: null,
    periodo_al: null
  };
  params: HttpParams;

  conferma_chiamata: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLecture();
  }

  public getLecture() {
    this.http.get("http://localhost:8080/testdoc/letture").subscribe(risp => {
      this.path = risp;
      this.conferma_chiamata = true;
    });
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.lettura_obj.codPunto = form.form.value.codice_punto;
    this.lettura_obj.lettura_dal = form.form.value.dataLettura || "";
    this.lettura_obj.lettura_al = form.form.value.dataLettura_al || "";
    this.lettura_obj.periodo_dal = form.form.value.periodo_dal || "";
    this.lettura_obj.periodo_al = form.form.value.periodo_al || "";

    this.params = new HttpParams()
      .set("codPunto", this.lettura_obj.codPunto)
      .set("letturaD", this.lettura_obj.lettura_dal)
      .set("letturaAl", this.lettura_obj.lettura_al)
      .set("periodoD", this.lettura_obj.periodo_dal)
      .set("periodoAl", this.lettura_obj.periodo_al);

    this.http
      .get("http://localhost:8080/testdoc/letture", { params: this.params })
      .subscribe(risp => {
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }
}
