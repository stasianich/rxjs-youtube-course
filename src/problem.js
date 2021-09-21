import { interval } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]

btn.addEventListener('click', () => {
  btn.disabled = true;

  let i = 0;
  const canDrink = [];

  const interval = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name)
      }

      display.textContent = canDrink.join(', ');
      i++;
    } else {
      clearInterval(interval);
      btn.disabled = false;
    }

  }, 1000);
})

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  interval(1000)
      .pipe(
          // Ограничень количество взятых элементов
          take(people.length),
          filter(index => people[index].age >= 18),
          map(index => people[index].name),
          // Объединение в один массив
          scan((acc, personName) => acc.concat(personName), [])
      )
      .subscribe(res => {
          display.textContent = res.join(', ');
      },
          null, // CallBack для обработки ошибок
          () => rxjsBtn.disabled = false) // CallBack, который отработает в конце
})


