import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-tab-righe-di-calcolo",
  templateUrl: "./tab-righe-di-calcolo.component.html",
  styleUrls: ["./tab-righe-di-calcolo.component.scss"]
})
export class TabRigheDiCalcoloComponent implements OnInit {
  path: Object;
  body: HttpParams;
  open_window: boolean = true;
  righe_obj = {
    cdoPunto: "",
    mese: "",
    testo: "",
    quantita: "",
    prezzo: "",
    importo: ""
  };
  conferma_chiamata: boolean = false;
  ivaList: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRighe();
  }

  public getRighe() {
    this.http.get("http://localhost:8080/testdoc/righe").subscribe(ris => {
      this.path = ris;
      this.conferma_chiamata = true;
    });
  }

  open() {
    this.open_window = !this.open_window;
    this.getIva();
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.righe_obj.cdoPunto = form.form.value.codice_punto;
    this.righe_obj.mese = form.form.value.mese;
    this.righe_obj.testo = form.form.value.testo;
    this.righe_obj.quantita = form.form.value.quantita;
    this.righe_obj.prezzo = form.form.value.price;
    this.righe_obj.importo = form.form.value.import;
    console.log("oggetto ", this.righe_obj);
    this.body = new HttpParams()
      .set("codPunto", this.righe_obj.cdoPunto)
      .set("mese", this.righe_obj.mese)
      .set("testo", this.righe_obj.testo)
      .set("quantita", this.righe_obj.quantita.toString())
      .set("prezzo", this.righe_obj.prezzo.toString())
      .set("importo", this.righe_obj.importo.toString());
    this.http
      .get("http://localhost:8080/testdoc/righe", { params: this.body })
      .subscribe(risp => {
        console.log("risp di dettaglio", risp);
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }

  ripulisci(form: NgForm) {
    if (form.dirty) {
      form.resetForm();
    }
  }

  public getIva() {
    this.http
      .get<string[]>("http://localhost:8080/testdoc/iva")
      .subscribe(ris => (this.ivaList = ris));
  }
}
