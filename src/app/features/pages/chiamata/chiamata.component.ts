import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AllCommunityModules, Module } from "@ag-grid-community/all-modules";
import { GridOptions, RowClickedEvent } from "ag-grid-community";
import { Router } from "@angular/router";

@Component({
  selector: "app-chiamata",
  templateUrl: "./chiamata.component.html",
  styleUrls: ["./chiamata.component.scss"]
})
export class ChiamataComponent implements OnInit, OnChanges, GridOptions {
  private gridApi;
  private gridColumnApi;
  public modules: Module[] = AllCommunityModules;
  // tslint:disable-next-line:no-input-rename
  @Input() path: Object;
  @Input() lente: boolean;
  columnDefs = [];
  rowData: any;
  rowSelection;

  @Input() paginationPageSize: number;

  // ho commentato l http
  constructor(private http: HttpClient, private router: Router) {
    this.rowSelection = "single";
  }

  ngOnInit() {
    this.getAll(this.path, this.lente);
  }

  ngOnChanges() {
    this.getAll(this.path, this.lente);
  }

  // tolta da costruttore

  getAll(path, lente) {
    // return this.http.get("http://localhost:8080/cliente/2/" + this.nomeF).subscribe(
    console.log("chiamata", path);
    //   console.log("questo è ", risp)
    const keys = Object.keys(path[0]);
    console.log("chiamata chiavi", keys);
    const columnDefs = [];
    // columnDefs.push({ width: 50, cellRenderer: 'costumCell' });
    if (lente) {
      columnDefs.push({
        width: 50,
        template: '<img src="assets/images/dettaglio.gif">'
      });
    }
    for (const k of keys) {
      columnDefs.push({
        headerName: k,
        field: k,
        resizable: true,
        flex: 1
      });
    }
    this.columnDefs = columnDefs;
    this.rowData = path;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event: any): void {
    console.log("onRowClicked", event);
    for (const element in event.colDef) {
      if (element === "template") {
        const codCli = event.data.cod_cliente;
        console.log(codCli);
        this.router.navigate(["/prova/" + codCli]);
      }
    }
  }
}
