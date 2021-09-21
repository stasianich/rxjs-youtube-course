import {
    Subject,
    BehaviorSubject,
    ReplaySubject
} from 'rxjs';

document.addEventListener('click', () => {
   const initialValue = 'First!'; // for BehaviorSubject(initialValue)
    const stream$ = new ReplaySubject(4);

    stream$.next('Hello'); // dispatch event
    stream$.next('RX'); // dispatch event
    stream$.next('JS'); // dispatch event

    stream$.subscribe(value => console.log('Value: ', value));
})
