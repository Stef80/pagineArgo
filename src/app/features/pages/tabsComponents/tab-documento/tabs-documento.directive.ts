import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appTabsDocumento]"
})
export class TabsDocumentoDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
