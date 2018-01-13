import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'assessmentFilter'})
export class NameFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((name) =>
            name.subject_name.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
