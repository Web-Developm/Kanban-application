import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  items=['One','Two','Three','Four'];

  fruits=['Apple','Mango','Banana','Orange','Grapes'];

  places=['Hyderabad','Bangalore','Chennai','Delhi'];

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container)
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,event.previousIndex,event.currentIndex);

    }
  }

  ngOnInit(): void {
  }

}
