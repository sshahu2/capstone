import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'parametersFilter'})
export class ParametersFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((subdomain) =>
            subdomain.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
