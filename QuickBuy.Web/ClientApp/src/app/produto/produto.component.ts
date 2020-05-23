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
  public ativar_spinner: boolean;
  public mensagem: string;

  constructor(private produtoServico:ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new ProdutoModel();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativarEspera();
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
        .subscribe(
          nomeArquivo => {
            this.produto.nomeArquivo = nomeArquivo;
            //alert(this.produto.nomeArquivo);
            console.log(nomeArquivo);
            this.desativarEspera();
          },
          err => {
            console.log(err.error);
            this.desativarEspera();
          }
        );
    //alert(this.arquivoSelecionado.name);
  }

  public obterNome(): string {
    return "Samsung";
  }

  public cadastrar() {
    //alert('oi');
    //this.ativar_spinner = true;
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.desativarEspera();
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.desativarEspera();
        }
      );
  }

  public ativarEspera() {
    this.ativar_spinner = true;
  }
  public desativarEspera() {
    this.ativar_spinner = false;
  }
}
