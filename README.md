- npm install -g @angular/cli
- ng new app-name
- cd app-name
- ng serve --open
- ng g c component-name

## component

- manual - 3 files in 1 folder = html,css,ts
- root-app componenet html file has the other component <>,</>
- every thing is declared in a single module = appmodule
- auto - ng generate component <component-name>
- databinding = ngOninit, sting interpolation{{}}
- decorator - @input(parent to child); @output(child to parent), @outputdecorator(

)
// @ViewChild(PostComponent) pc: any;
// constructor(private cdr: ChangeDetectorRef) {}
//lifecycle method for AfterViewInit
// Method to receive PostComponent instance from @ViewChild - to avoid ExpressionChangedAfterItHasBeenCheckedError
// setPostComponent(pc: PostComponent) {
// this.pc = pc;
// }
// receiveMsg(e: any) {
// this.opdecname = e;
// }

# angular directives

- ## ngFor and change detection and index of nfFor structural

- detects the change and automatically detects the value and manipulates the dom
- slice will detect the index and remove the number of count of elements in that index

```html
<h1>ngfor</h1>
<button (click)="addnew()">add new</button>
<ul>
  <li *ngFor="let array1 of ar2">
    {{ array1.msg }}
    <button (click)="onDelete(array1)">delete</button>
  </li>
</ul>
```

```js
export class AppComponent {
  ar1: Array<string> = ["a1", "a2", "a3", "a4"];
  ar2: Array<any> = [
    { id: 1, msg: "post1" },
    { id: 2, msg: "post2" },
    { id: 3, msg: "post3" },
    { id: 4, msg: "post4" },
    { id: 5, msg: "post5" },
  ];
  addnew() {
    this.ar2.push({ id: 3, msg: "post6" });
  }
  onDelete(arr: any) {
    let indexnumber = this.ar2.indexOf(arr);
    console.log(indexnumber);
    this.ar2.splice(indexnumber, 1);
  }
}
```

- ## we can also pass the index in ngfor and pass that index ===> ngForDirective Index

```html
<h1>ngfor</h1>
<button (click)="addnew()">add new</button>
<ul>
  <li *ngFor="let array1 of ar2; let i = index">
    {{ array1.msg }}
    <button (click)="onDelete(i)">delete</button>
  </li>
</ul>
```

```js
export class AppComponent {
  ar1: Array<string> = ["a1", "a2", "a3", "a4"];
  ar2: Array<any> = [
    { id: 1, msg: "post1" },
    { id: 2, msg: "post2" },
    { id: 3, msg: "post3" },
    { id: 4, msg: "post4" },
    { id: 5, msg: "post5" },
  ];
  addnew() {
    this.ar2.push({ id: 3, msg: "post6" });
  }
  onDelete(i: any) {
    this.ar2.splice(i, 1);
  }
}
```

- ## ngIf structural

```html
<h1>ngfor</h1>
<button (click)="addnew()">add new</button>
<div *ngIf="ar2.length > 0">
  <ul>
    <li *ngFor="let array1 of ar2; let i = index">
      {{ array1.msg }}
      <button (click)="onDelete(i)">delete</button>
    </li>
  </ul>
</div>
<div *ngIf="ar2.length == 0"><h1>no data</h1></div>
```

- ## ngTemplate attribute

```html
<h1>ngfor</h1>
<button (click)="addnew()">add new</button>
<div *ngIf="ar2.length > 0; else nodata">
  <ul>
    <li *ngFor="let array1 of ar2; let i = index">
      {{ array1.msg }}
      <button (click)="onDelete(i)">delete</button>
    </li>
  </ul>
</div>
<ng-template #nodata><h1>no data</h1></ng-template>
```

- if else like in ngtemplate for true use then else for false

```html
<h1>ngfor</h1>
<button (click)="addnew()">add new</button>
<div *ngIf="ar2.length > 0; then data; else nodata"></div>
<ng-template #data>
  <ul>
    <li *ngFor="let array1 of ar2; let i = index">
      {{ array1.msg }}
      <button (click)="onDelete(i)">delete</button>
    </li>
  </ul>
</ng-template>

<ng-template #nodata><h1>no data</h1></ng-template>
```

- # ngSwitch structural

- ```html
  <div>
    <button (click)="sel('step1')">step 1</button>
    <button (click)="sel('step2')">step 2</button>
    <button (click)="sel('step3')">step 3</button>
    <button (click)="sel('step4')">step 4</button>
  </div>
  ```

<div *ngIf="str1 == 'step1'"><h1>step 1</h1></div>
<div *ngIf="str1 == 'step2'"><h1>step 2</h1></div>
<div *ngIf="str1 == 'step3'"><h1>step 3</h1></div>
<div *ngIf="str1 == 'step4'"><h1>step 4</h1></div>

<div [ngSwitch]="str1">
  <h1 *ngSwitchCase="'step1'">step 1</h1>
  <h1 *ngSwitchCase="'step2'">step 2</h1>
  <h1 *ngSwitchCase="'step3'">step 3</h1>
  <h1 *ngSwitchCase="'step4'">step 4</h1>
  <h1 *ngSwitchDefault>no button selected</h1>
</div>
  ```

- ## ngStyle attribute & ngclass are like the sanme way

- style property binding can be replaced by

```html
<h1 [style.color]="bol1 ? 'red' : 'blue'" [style.text-transform]="bol1 ? 'capitalize' : 'lowercase'">hello</h1>

<h1
  [ngStyle]="{
      color:bol1 ? 'red' : 'blue',
      textTransform: bol1 ? 'uppercase' : 'lowercase'
    }"
>
  hello
</h1>
```

- ## strucutral dirictive - change the stuecture of the dom ngif,ngfor,ngswitch
- ## attribute dirictive - change the attribute or apperance of the dom ngclass,ngstyle and also replace the propertybinding

# angular pipe

- ## Number,currency,uppercasae lowercase,date,json,slice,percent, custom
- ng g pipe Pipe/summary for custom pipe folder/filename
- we can control the decimal digit values by after the point by gin=ving the min and max values
- we can control the decimal values by before the point in number pipes
- in slice pipe we pass {{ value_expression | slice : start [ : end ] }}

```html
<!--uppercasae lowercase pipe  -->
<h1>{{[a|uppercase,A|lowercase]}}</h1>

<!-- Number pipe and decimal and percent -->
<h1>{{ 23143456 | number }}</h1>
<!--  //23,143,456 -->
<h1>{{ 2.3143456 | number : "1.2-5" }}</h1>
<!-- 2.31435 -->
<h1>{{ 0.100 | percent }}</h1>
<!--  //100% -->
<h1>{{ 0.100 | percent : "1.1-1" }}</h1>
<!--  //100.0% -->

<!-- currency and number  pipe-->
<h1>{{ 23.143456 | currency : "USD" : false : "3.3-5" }}</h1>
<!--USD023.14346 -->
<h1>{{ 23.143456 | currency : "USD" : true : "3.3-5" }}</h1>
<!--$023.14346 -->

<!-- date -->
<h1>{{ str2 | date : "medium" }}</h1>
<!--Oct 6, 2023, 1:33:07 PM -->

<!-- json -->
<h1>{{ {id:23,name:'bhumesh'}| date : "json" }}</h1>
<!--{id:23,name:'bhumesh'} -->
```
