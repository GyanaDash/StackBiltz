import { $$ } from '@angular/compiler/src/chars';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit 
{
ngOnInit()
{
  of(2, 4, 6, 8).subscribe(console.log);

  from([20, 15, 10, 5]).subscribe(
    item => console.log(`resulting item.. ${item}`),
    err => console.log(`error occured.. ${err}`),
    () => console.log('Complete')
  );

  of('Apple', 'Orange', 'Banana').subscribe(
    fruit => console.log(`Fruit was emitted ${fruit}`),
    err => console.error(`Error Occured: ${err}`),
    () => console.log(`No more Fruits..Go Home`)
  )

}
  name = 'Angular ' + VERSION.major;
}
