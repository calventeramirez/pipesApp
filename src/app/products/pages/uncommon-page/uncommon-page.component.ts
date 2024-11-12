import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Pablo';
  public gender: 'male' | 'female' = 'male';
  public invitacionMap = { male: 'invitarlo', female: 'invitarla' };
  changeClient(): void {
    this.name = 'Paula';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = [
    'Pablo',
    'Pedro',
    'Carlos',
    'Maria',
    'Clara',
    'Raúl',
    'Paco',
    'Roberto',
    'Pepe',
    'Ronald',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  deleteClient(): void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public persona = {
    nombre: 'Pablo',
    anios: 30,
    dir: 'Málaga, España',
  };

  //Asinc Pipe
  public myObservableTemp = interval(2000).pipe(
    tap(valor => console.log('tap:', valor))
  );

  public valorPromesa:Promise<string> = new Promise((resultado, rechazo) => {
    setTimeout(
      () => {
        resultado("Tenemos datos en la promesa.")
      }, 3500
    );
  })
}

