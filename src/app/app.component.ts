import { $$ } from '@angular/compiler/src/chars';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit 
{
ngOnInit()
{
  //Declaring DataStream using 'of'
  of(2, 4, 6, 8).subscribe(console.log); 

  //Declaring DataStream using 'from' and 3 notification method.
  from([20, 15, 10, 5]).subscribe(
    item => console.log(`resulting item.. ${item}`),
    err => console.log(`error occured.. ${err}`),
    () => console.log('Complete')
  );

  //Declaring string DataStream using 'of' and 3 notification method.
  of('Apple', 'Orange', 'Banana').subscribe(
    fruit => console.log(`Fruit was emitted ${fruit}`),
    err => console.error(`Error Occured: ${err}`),
    () => console.log(`No more Fruits..Go Home`)
  )

  //Example of Map operator.
  of(2, 4, 6, 8).pipe(
    map(item => item * 2),
    map(item => item+3),
    map(item => item+2)
  ).subscribe(console.log);

//Example of Map & Tap operator.
  of(2, 4, 6, 8).pipe(
    tap(item => console.log(item)),
    map(item => item * 2),
    tap(item => console.log(item)),
    map(item => item+3),
    tap(item => console.log(item)),
    map(item => item+2)
  ).subscribe();

//Example of Map and Take operator. Tkae is a filtering operator
  of(2, 4, 6).pipe(
    map(item => item*2),
    take(2) //This means it'll take upto 2 items from the stream after that it'll unsubscribe.
  ).subscribe(console.log);

//Example of map, tap ...
    from([20, 15, 10, 5]).pipe(
      tap(item => console.log(`resulting item.. ${item}`)),
      map(item => item * 2),
      map(item => item - 10),
      map(item => 
      {
        if (item === 0)
        {
          throw new Error
        }
      }),
      take(3)
    ).subscribe(
    item => console.log(`resulting item.. ${item}`),
    err => console.log(`error occured.. ${err}`),
    () => console.log('Complete')
  );
}
  name = 'Angular ' + VERSION.major;
}
