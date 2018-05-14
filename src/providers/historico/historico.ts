import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class HistoricoProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(historico: Historico) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into historico (primeiroNumero, segundoNumero, operacao, resultado) values (?, ?, ?, ?)';
        let data = [historico.primeiroNumero, historico.segundoNumero, historico.operacao, historico.resultado];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

 

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from historico where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from historico where id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let historico = new Historico();
              historico.id = item.id;
              historico.primeiroNumero = item.primeiroNumero;
              historico.segundoNumero = item.segundoNumero;
              historico.operacao = item.operacao;
              historico.resultado = item.resultado;

              return historico;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT h.* FROM historico h';

        return db.executeSql(sql, {})
          .then((data: any) => {
            if (data.rows.length > 0) {
              let historicos: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var historico = data.rows.item(i);
                historicos.push(historico);
              }
              return historicos;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class Historico {
  id: number;
  primeiroNumero: string;
  segundoNumero: string;
  operacao: string;
  resultado: string;
}