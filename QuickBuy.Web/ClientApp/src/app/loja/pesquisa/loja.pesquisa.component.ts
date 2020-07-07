import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { ProdutoModel } from "../../modelo/produto.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls:["./loja.pesquisa.component.css"]
})
export class LojaPesquisaComponent implements OnInit {

  public produtos: ProdutoModel[];

  ngOnInit(): void {
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
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

  public abrirProduto(produto: ProdutoModel) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }
}
