import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
  ],
  
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
