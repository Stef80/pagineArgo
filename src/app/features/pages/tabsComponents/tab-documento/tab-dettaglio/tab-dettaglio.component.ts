import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-dettaglio",
  templateUrl: "./tab-dettaglio.component.html",
  styleUrls: ["./tab-dettaglio.component.scss"]
})
export class TabDettaglioComponent implements OnInit {
  path: Object;
  lente: boolean = false;
  body: HttpParams;
  dettaglio_obj: {
    cdoPunto: "";
    mese: "";
    testo: "";
    quantita: 0;
    prezzo: 0;
    importo: 0;
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDettaglio();
  }

  public getDettaglio() {
    this.http.get("http://localhost:8080/testdoc/dettagli").subscribe(risp => {
      this.path = risp;
    });
  }

  cerca(form: NgForm) {
    this.dettaglio_obj.cdoPunto = form.form.value.codice_punto;
    this.dettaglio_obj.mese = form.form.value.mese;
    this.dettaglio_obj.testo = form.form.value.testo;
    this.dettaglio_obj.quantita = form.form.value.quantita;
    this.dettaglio_obj.prezzo = form.form.value.prezzo;
    this.dettaglio_obj.importo = form.form.value.importo;
    this.body = new HttpParams()
      .set("codPunto", this.dettaglio_obj.cdoPunto)
      .set("mese", this.dettaglio_obj.mese)
      .set("testo", this.dettaglio_obj.testo)
      .set("quantita", this.dettaglio_obj.quantita.toString())
      .set("prezzo", this.dettaglio_obj.prezzo.toString())
      .set("importo", this.dettaglio_obj.importo.toString());
    this.http
      .get("http://localhost:8080/testdoc/dettagli", { params: this.body })
      .subscribe(risp => {
        console.log("risp di dettaglio", risp);
        this.path = risp;
      });
  }
}
