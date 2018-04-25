import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numeroUm: string;
  numeroDois: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  somar() {
    if (this.validarDados()) {
      let resultado = parseInt(this.numeroUm) + parseInt(this.numeroDois);
      this.mostrarAlerta(resultado.toString());
    }
  }

  subtrair() {
    if (this.validarDados()) {
      let resultado = parseInt(this.numeroUm) - parseInt(this.numeroDois);
      this.mostrarAlerta(resultado.toString());
    }
  }

  multiplicar() {
    if (this.validarDados()) {
      let resultado = parseInt(this.numeroUm) * parseInt(this.numeroDois);
      this.mostrarAlerta(resultado.toString());
    }
  }

  dividir() {
    if (this.validarDados()) {
      if(this.numeroDois === '0'){
        this.mostrarErro('Não é possível dividir por ZERO!')
        return false;
      }
      let resultado = parseInt(this.numeroUm) / parseInt(this.numeroDois);
      this.mostrarAlerta(resultado.toString());
    }
  }

  validarDados() {
    if (this.numeroUm == null || this.numeroUm.length == 0
      || this.numeroUm == null || this.numeroUm.length == 0) {
      this.mostrarErro('É obrigatório informar os dois números');
      return false;
    }
    return true;
  }

  mostrarAlerta(valor: string) {
    let alert = this.alertCtrl.create({
      title: 'Resultado!',
      subTitle: `O resultado da operação é: ${valor}`,
      buttons: ['OK']
    });
    alert.present();
  }

  mostrarErro(mensagem: string) {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: `Tá erradoooooooo: ${mensagem}`,
      buttons: ['OK']
    });
    alert.present();
  }

}
