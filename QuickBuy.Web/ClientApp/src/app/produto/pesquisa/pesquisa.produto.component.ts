import { Component, OnInit } from "@angular/core";
import { ProdutoModel } from "../../modelo/produto.model";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})
export class PesquisaProdutoComponent implements OnInit {

  public produtos: ProdutoModel[];

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    produtoServico.obterTodosProdutos()
      .subscribe(
        produtosRetorno => {
          this.produtos = produtosRetorno;
        },
        err => {
          console.log(err.error);
        }
      )
  }
  ngOnInit(): void {
  }

  public adicionarProduto() {

    this.router.navigate(['/produto']);
  }

  public editarProduto(produto: ProdutoModel) {
    sessionStorage.setItem('produtoSession',JSON.stringify(produto));
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: ProdutoModel) {
    var retorno = confirm("Deseja realmente deletar este produto selecionado?");
    if (retorno == true) {
      this.produtoServico.deletar(produto)
        .subscribe(
          produtosDeletado => {
            //console.log(produtosDeletado);
            this.produtos = produtosDeletado;
          },
          err => {
            console.log(err.error);
          }
        );
    }
  }

}
