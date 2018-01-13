import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'submodulesFilter'})
export class SubmodulesFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((subdomain) =>
            subdomain.name.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
