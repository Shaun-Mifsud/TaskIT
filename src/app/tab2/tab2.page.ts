import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component,ViewChild } from '@angular/core';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import { TaskService } from '../services/task.service';
import {  Category, Task } from '../struct/list';
import { CalendarModule } from 'ion2-calendar';
import * as moment from 'moment';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
; 
  
  moment: any = moment;

  slideOpts = {
    slidesPerView: 2.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

  public item: Task = { name: '', complete: false };
  public categories: Category[] = [];
  public currentTasks: Task[] = [];

  //cateogry ID
  selectedIndex: number = -1;

  slideNumber: number = 0;

  categoryIndex:number = -1;

  totalComplete:number =0;

  //calendar
  date: string;
  type: 'string';

  
  constructor(
    private storageService: StorageService,
    public taskService: TaskService
  ) {}

  async ngOnInit()
  {    
    this.categories = this.taskService.list;
    //console.log(this.categories);
  }

  today(index:number){
    this.categoryIndex = index;
}

  chooseCategory(index:number){
    this.categoryIndex = index;
    //console.log(this.categories[this.categoryIndex]);
  }
  getTasks(categoryIndex:number){
    this.currentTasks = this.taskService.list[categoryIndex].tasks;  
    console.log(this.currentTasks);  
  } 

  updateCheckbox(task:Task)
  {
    this.taskService.writeToStorage();
  }

  //calendar
  onChange($event) {
    const chosenDate = new Date($event.format('DD-MMMM-YYYY')).getTime();    
    const list = this.taskService.getAllTasks(chosenDate);
    this.currentTasks=list;
  }

  totalTasksComplete()
  {
    this.totalComplete=0;    
    console.log(this.currentTasks);      
    console.log("categories length "+this.categories.length); 

    for (let i = 0; i < this.currentTasks.length; i++) {

      if(this.currentTasks[i].complete== true)
      {
        this.totalComplete +=1;  
      }  
    }
  }
    
  delete(currentIndex:number){
    this.taskService.delete(this.categoryIndex,currentIndex);
  }


}