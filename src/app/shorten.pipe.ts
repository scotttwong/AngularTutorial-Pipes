import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        const dotdotdot = (value.length > limit) ? ' ...' : '';
        return value.substr(0,limit) + dotdotdot;
    }
}