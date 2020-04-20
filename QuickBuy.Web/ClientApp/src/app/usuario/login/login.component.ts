import { Component } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;

  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  entrar() {

    if (this.usuario.email == 'fer@eu' && this.usuario.senha == '123') {
      this.usuarioAutenticado = true;
      sessionStorage.setItem("usuario-Autenticado", "1");
      //this.router.navigate(['/']);
    }
    alert(this.usuario.email + ' ' + this.usuario.senha);
  }
  //public email = "";
  //public senha = "";
  //public enderecoImagem = "https://virginiahomesgroup.com/wp-content/uploads/2013/08/buy1.jpg";
  //public titulo = "imagem vinda do component type padrão do site";

  
  //on_keypress() {
  //  alert('foi digitado no campo email');
  //}
}
