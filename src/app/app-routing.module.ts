import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { ModuloComponent } from './features/pages/modulo/modulo.component';
import { MenuComponent } from './features/pages/menu/menu.component';
import { RicercaClientiComponent } from './features/pages/ricerca-clienti/ricerca-clienti.component';
import { SideBarComponent } from './features/pages/side-bar/side-bar.component';
import { CardComponent } from './features/pages/card/card.component';
import { ChiamataComponent } from './features/pages/chiamata/chiamata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvaPageComponent } from './features/pages/prova-page/prova-page.component';
import { TabComponent } from './features/pages/tab/tab.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'modulo', component: ModuloComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'ricercaClienti', component: RicercaClientiComponent},
  { path: 'sideBar', component: SideBarComponent},
  { path: 'card', component: CardComponent},
  { path: 'chiamata/:filename', component: ChiamataComponent},
  { path: 'chiamata', component: ChiamataComponent},
  { path : 'prova/:cod_Cliente', component: ProvaPageComponent},
  { path: 'tab', component: TabComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
