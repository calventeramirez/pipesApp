import { Pipe, PipeTransform } from '@angular/core';
/*
pablo | toggleCase = PABLO
PABLO | toggleCase = pablo
*/
@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toUpper: boolean = false): string {
        return (toUpper) ? value.toUpperCase(): value.toLowerCase();
    }
}