import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-competenze-fatture",
  templateUrl: "./tab-competenze-fatture.component.html",
  styleUrls: ["./tab-competenze-fatture.component.scss"]
})
export class TabCompetenzeFattureComponent implements OnInit {
  competenze_obj = {
    codPunto: "",
    podPdr: "",
    periodo: "",
    periodo_al: ""
  };
  path: Object;
  params: HttpParams;
  conferma_chiamata: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCompFat();
  }

  public getCompFat() {
    this.http
      .get("http://localhost:8080/testdoc/competenze")
      .subscribe(risp => {
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.competenze_obj.codPunto = form.form.value.codice_punto;
    this.competenze_obj.podPdr = form.form.value.podPdr;
    this.competenze_obj.periodo = form.form.value.periodo_dal || "";
    this.competenze_obj.periodo_al = form.form.value.al || "";

    this.params = new HttpParams()
      .set("codPunto", this.competenze_obj.codPunto)
      .set("podPdr", this.competenze_obj.podPdr)
      .set("periodo", this.competenze_obj.periodo)
      .set("periodoAl", this.competenze_obj.periodo_al);
    console.log("params competenze", this.params);

    this.http
      .get("http://localhost:8080/testdoc/competenze", { params: this.params })
      .subscribe(risp => {
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }
}
