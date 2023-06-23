import { Component,EventEmitter } from '@angular/core';
import { StudService } from './stud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudService]
})
export class AppComponent {
  // title = 'proj';
  // currentItem='Laptop';

  // child to parent
  // items = ['item1', 'item2', 'item3', 'item4'];
  // add(newItem:string){
  //   this.items.push(newItem);
  // }
title="Services";
name:string="";

constructor(public studService:StudService){
  this.name=studService.name;
}
}