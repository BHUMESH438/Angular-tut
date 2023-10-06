import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ar1: Array<string> = ['a1', 'a2', 'a3', 'a4'];
  ar2: Array<any> = [
    { id: 1, msg: 'post1' },
    { id: 2, msg: 'post2' },
    { id: 3, msg: 'post3' },
    { id: 4, msg: 'post4' },
    { id: 5, msg: 'post5' },
  ];
  str1: string = '';
  str2: Date = new Date();
  str3: string =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sit sequi vitae atque maxime, ducimus veritatis iure id eaque doloribus non error ipsa dolor repudiandae illo neque quae excepturi illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sit sequi vitae atque maxime, ducimus veritatis iure id eaque doloribus non error ipsa dolor repudiandae illo neque quae excepturi illum.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sit sequi vitae atque maxime, ducimus veritatis iure id eaque doloribus non error ipsa dolor repudiandae illo neque quae excepturi illum.';
  bol1: boolean = false;
  str4 = {
    name: 'bhumehs',
    country: 'india',
  };
  addnew() {
    this.ar2.push({ id: 3, msg: 'post6' });
  }
  onDelete(arr: any) {
    this.ar2.splice(arr, 1);
  }
  sel(arg: any) {
    this.str1 = arg;
  }
  setbol() {
    this.bol1 = !this.bol1;
  }
}
