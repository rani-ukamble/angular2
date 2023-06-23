import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent  {
  @Input() item = '';
  @Output() newItemEvent =new EventEmitter<string> ();

  add(value:string){
    this.newItemEvent.emit(value);
  }
}

