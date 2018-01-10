import { Component } from '@angular/core';

// Interpolation example - shows objects with key value pairs displayed in the template
// @Component({
//   selector: 'app-root',
//   template: `  <h1>hey you guys</h1>
//   <p>{{myObject.gender}}</p>
//   <p>{{myObject.age}}</p>
//   <p>{{myObject.location}}</p>
//   `,
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   myObject = {
//     gender: 'male',
//     age: 32,
//     location: 'Scotland'
//   };
// }


// *ngFor example loops through an array
// @Component({
//   selector: 'app-root',
//   template: `  <h1>hey you guys</h1>
//   <ul>
//     <li *ngFor="let arr of myArr">{{ arr }}</li>
//   </ul>
//   `,
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   myArr = ['him', 'not him', 'also not him', 'still not him'];
// }




// // *ngIf checks if a variable exists then uses an then else statement to choose what to display
//
// @Component({
//   selector: 'app-root',
//   template: `  <h1>hey you guys</h1>
//   <div *ngIf="myArr; then tmpl1 else tmpl2"></div>
//     <ng-template #tmpl1>I'm here</ng-template>
//   <ng-template #tmpl2>I'm not here</ng-template>
//   `,
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   myArr = ['him', 'not him', 'also not him', 'still not him'];
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <button [disabled]="buttonStatus == 'enabled'">Best Button EVEREERERERER!!!!</button>
//     <button (click)="myEvent($event)">Best Button EVEREERERERER!!!!</button>
//
//   `,
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Hello to the world Im learning angular 4';
//   buttonStatus = 'enabled';
//   myEvent(event) {
//     console.log(event);
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
        text-decoration:underline;
    }
    .red-title {
      color:blueviolet;
    }
    .large-title {
      font-size:4em;
    }
`]
})
export class AppComponent {
  title = 'Hello to the world Im learning angular 4';
  subtitle = 'Im a subtitle';
  titleClass = true;
  titleStyle = false;
  titleClasses = {
    'red-title': true,
    'large-title': true
  };
}
