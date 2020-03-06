import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-log-doc",
  templateUrl: "./tab-log-doc.component.html",
  styleUrls: ["./tab-log-doc.component.scss"]
})
export class TabLogDocComponent implements OnInit {
  path: Object;
  log_obj = {
    codPunto: "",
    tipo: "",
    segnalazione: "",
    testo: ""
  };
  params: HttpParams;
  conferma_chiamata: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLog();
  }

  public getLog() {
    return this.http
      .get("http://localhost:8080/testdoc/log/")
      .subscribe(risp => {
        console.log("get log method", risp);
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.log_obj.codPunto = form.form.value.codice_punto;
    this.log_obj.tipo = form.form.value.tipo;
    this.log_obj.segnalazione = form.form.value.segnalazione;
    this.log_obj.testo = form.form.value.testo;

    this.params = new HttpParams()
      .set("codPunto", this.log_obj.codPunto)
      .set("tipo", this.log_obj.tipo)
      .set("segnalazione", this.log_obj.segnalazione)
      .set("testo", this.log_obj.testo);

    this.http
      .get("http://localhost:8080/testdoc/log/", { params: this.params })
      .subscribe(risp => {
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }
}
