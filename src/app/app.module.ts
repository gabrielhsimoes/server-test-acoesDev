import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaqueTopoComponent } from './destaque-topo/destaque-topo.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueTopoComponent,
    SobreComponent,
    ExperienciaComponent,
    PortfolioComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
