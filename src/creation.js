import {
    of,
    from,
    Observable,
    fromEvent,
    range,
    timer,
    interval
} from 'rxjs';

import {
    map,
    scan
} from "rxjs/operators";

// const stream$ = of(1, 2, 3, 4)
//
// stream$.subscribe(val => {
//     console.log('Value: ', val);
// })

// const arr$ = from ([1, 2, 3, 4])
//     .pipe(
//         scan((acc, value) => acc.concat(value), [])
//     );
//
// arr$.subscribe(value => console.error(value));

// const stream$ = new Observable(observer => {
//     observer.next('First value')
//
//     setTimeout(() => observer.next('After 1000ms'), 1000);
//     // setTimeout(() => observer.complete(), 1500);
//     // setTimeout(() => observer.error('Something went wrong'), 2000);
//     setTimeout(() => observer.next('After 3000ms'), 3000);
// })

// stream$.subscribe(
//     value => console.log('Value: ', value),
//     error => console.log('Error: ', error),
//     () => console.log('Complete'),
// );

// stream$.subscribe({
//     next(val) {
//         console.log(val);
//     },
//     error(val) {
//         console.warn(val);
//     },
//     complete() {
//         console.log('Complete');
//     }
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(event =>({
//             x: event.offsetX,
//             y: event.offsetY,
//             context: event.target.getContext('2d'),
//         }))
//     )
//     .subscribe(position => {
//         position.context.fillRect(position.x, position.y, 2, 2);
//     });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
//
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const subscription = interval(500).subscribe(v => console.log(v))
//
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 4000);

// timer(2500).subscribe(v => console.log(v)); // === setTimeout()

range(42, 10).subscribe(v => console.log(v));
