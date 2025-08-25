import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/navbar/card/card.component";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';


const client1 = {
  name: 'Freddy',
  gender: 'male',
  age: 23,
  address: 'Celaya, Guanajuato',
}

const client2 = {
  name: 'Ivonne',
  gender: 'female',
  age: 24,
  address: 'Celaya, Guanajuato',
}

@Component({
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos'
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }
}
