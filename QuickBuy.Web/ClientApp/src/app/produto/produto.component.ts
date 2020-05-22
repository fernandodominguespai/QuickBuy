import { Component, OnInit } from "@angular/core"
import { ProdutoModel } from "../modelo/produto.model";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

  public produto: ProdutoModel;
  public arquivoSelecionado: File;

  constructor(private produtoServico:ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new ProdutoModel();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
        .subscribe(
          retorno => {
            console.log(retorno);
          },
          err => {
            console.log(err.error);
          }
        );
    //alert(this.arquivoSelecionado.name);
  }

  public obterNome(): string {
    return "Samsung";
  }

  public cadastrar() {
    alert('oi');
    //this.produtoServico.cadastrar(this.produto)
    //  .subscribe(
    //    produtoJson => {
    //      console.log(produtoJson);
    //    },
    //    err => {
    //      console.log(err.error);
    //    }
    //  );
  }
}
