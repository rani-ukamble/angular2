import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
num:number=90;
validate(){
  alert("Warning");
}

list:Array<number>=[1,2,3,4];
constructor(){}
ngOnInit(): void {
    
}


add(){
this.num=40;
}
}
