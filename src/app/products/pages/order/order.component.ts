import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'productos-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?:keyof Hero;
  public heroes : Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color:Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color:Color.black
    },
    {
      name: "Daredevil",
      canFly: false,
      color:Color.red
    },
    {
      name: "Robin",
      canFly: false,
      color:Color.red
    },
    {
      name: "Green Larten",
      canFly: true,
      color:Color.green
    },
  ];

  toggleUpperCase():void{
    this.isUpperCase =  !this.isUpperCase;
  }

  changeOrder(valor: keyof Hero){
    this.orderBy = valor;
  }
}
