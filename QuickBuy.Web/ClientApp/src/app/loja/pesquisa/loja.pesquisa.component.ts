import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { ProdutoModel } from "../../modelo/produto.model";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls:["./loja.pesquisa.component.css"]
})
export class LojaPesquisaComponent implements OnInit {

  public produtos: ProdutoModel[];

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtosLoja => {
          this.produtos = produtosLoja;
        },
        err => {
          console.log(err.error);
        }
      );
  }

  ngOnInit(): void {
  }

}
