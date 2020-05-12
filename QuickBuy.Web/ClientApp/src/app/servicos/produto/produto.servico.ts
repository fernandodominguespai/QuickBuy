import { Injectable, Inject, OnInit } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProdutoModel } from "../../modelo/produto.model";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ProdutoServico implements OnInit {

  private _baseUrl: string;
  public produtos: ProdutoModel[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.produtos = [];
    }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(produto: ProdutoModel): Observable<ProdutoModel> {

    return this.http.post<ProdutoModel>(this._baseUrl + "api/produto/cadastrar",
      JSON.stringify(produto),
      { headers: this.headers });
  }

  public salvar(produto: ProdutoModel): Observable<ProdutoModel> {

    return this.http.post<ProdutoModel>(this._baseUrl + "api/produto/salvar",
      JSON.stringify(produto),
      { headers: this.headers });

  }

  public deletar(produto: ProdutoModel): Observable<ProdutoModel> {

    return this.http.post<ProdutoModel>(this._baseUrl + "api/produto/deletar",
      JSON.stringify(produto),
      { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this._baseUrl + "api/produto");
  }

  public obterProduto(produtoId: number): Observable<ProdutoModel> {
    return this.http.get<ProdutoModel>(this._baseUrl + "api/produto/obter");
  }
}
