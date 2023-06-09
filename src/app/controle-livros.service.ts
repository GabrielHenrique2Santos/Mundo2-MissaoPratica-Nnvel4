import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Importar a classe Livro

@Injectable({
  providedIn: 'root' // Configurar como serviço global
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {  codigo: 4,
      codEditora: 1,
      titulo: 'Livro D',
      resumo: 'Resumo do Livro D',
      autores: ['Autor 1', 'Autor 2']},
    {  codigo: 4,
      codEditora: 1,
      titulo: 'Livro D',
      resumo: 'Resumo do Livro D',
      autores: ['Autor 1', 'Autor 2'] },
    {  codigo: 4,
      codEditora: 1,
      titulo: 'Livro D',
      resumo: 'Resumo do Livro D',
      autores: ['Autor 1', 'Autor 2']}
  ]; // Definir o atributo livros com ao menos três elementos no formato JSON

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros; // Retornar o vetor livros
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro); // Adicionar o livro ao vetor
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1); // Remover o livro com o código fornecido
    }
  }
}
