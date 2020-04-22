import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public usuario;
  public returnUrl: string;
  public mensagem: string;

  //public usuarioAutenticado: boolean;
  //public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {
  }
  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data => {
          // essa linha será executada no caso de retorno sem erros
          var usuarioRetorno: Usuario;
          usuarioRetorno = data;
          sessionStorage.setItem("usuario-autenticado", "1");
          sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate([this.returnUrl]); 
          }
          
          //console.log(data);
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
        }
      );

    //if (this.usuario.email == 'fer@eu' && this.usuario.senha == '123') {
    //  this.usuarioAutenticado = true;
    
    //}
    //alert(this.usuario.email + ' ' + this.usuario.senha);
  }
  //public email = "";
  //public senha = "";
  //public enderecoImagem = "https://virginiahomesgroup.com/wp-content/uploads/2013/08/buy1.jpg";
  //public titulo = "imagem vinda do component type padrão do site";

  
  //on_keypress() {
  //  alert('foi digitado no campo email');
  //}
}
