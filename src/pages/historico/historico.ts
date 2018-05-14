import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HistoricoProvider, Historico } from '../../providers/historico/historico'

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  historicos: any[] = [];
  searchText: string = null;

  constructor(public navCtrl: NavController, private toast: ToastController, private historicoProvider: HistoricoProvider) { 
  }

  ionViewDidEnter() {
    this.buscarTodoHistorico();
  }

  buscarTodoHistorico() {
    this.historicoProvider.getAll()
      .then((result: any[]) => {
        this.historicos = result;
      });
  }


  removerHistorico(historico: Historico) {
    this.historicoProvider.remove(historico.id)
      .then(() => {
        // Removendo do array de historico
        var index = this.historicos.indexOf(historico);
        this.historicos.splice(index, 1);
        this.toast.create({ message: 'Item removido do histórico.', duration: 3000, position: 'botton' }).present();
      })
  }

}
