import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Importar a classe Editora

@Injectable({
  providedIn: 'root' // Configurar como serviço global
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nomeEditora: 'Editora A' },
    { codEditora: 2, nomeEditora: 'Editora B' },
    { codEditora: 3, nomeEditora: 'Editora C' }
  ]; // Definir o atributo editoras com ao menos três elementos no formato JSON

  constructor() {}

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora); // Utilizar o método find para filtrar a editora pelo código
    return editora ? editora.nomeEditora : ''; // Retornar o nome da editora ou uma string vazia caso não seja encontrada
  }

  getEditoras(): Array<Editora> {
    return this.editoras; // Retornar o vetor editoras
  }
}
