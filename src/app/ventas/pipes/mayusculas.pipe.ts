import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {


    transform(values: string, enMayusculas: boolean = true): string {
        return (enMayusculas ? values.toUpperCase() : values.toLowerCase());
    }

}