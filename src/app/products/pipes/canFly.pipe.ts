import { Pipe, type PipeTransform } from '@angular/core';

/*
  true -> vuela
  false -> no vuela
*/

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {

  transform(valor: boolean): "Vuela"|"No vuela" {
    if(valor) return "Vuela";
    return "No vuela";
  }

}
