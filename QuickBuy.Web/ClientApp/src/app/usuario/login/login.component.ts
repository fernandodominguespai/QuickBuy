import { Component } from "@angular/core";
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;

  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == 'fer' && this.usuario.senha == '123') {
      this.usuarioAutenticado = true;
    }
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
