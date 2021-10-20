import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [], // onde são colocados os serviços usados por todos os componentes importados
  bootstrap: [AppComponent] // qual componente será o container da aplicação
})
export class AppModule { }
