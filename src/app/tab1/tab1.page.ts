import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { relativeTimeThreshold } from 'moment';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import { TaskService } from '../services/task.service';
import {  Category, Task } from '../struct/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

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
  public currentTask: Task[] = [];
  
  //cateogry ID
  selectedIndex: number = -1;

  slideNumber: number = 0;

  categoryIndex:number = -1;

  totalComplete:number =0;

  
  constructor(
    private storageService: StorageService,
    public taskService: TaskService
  ) {}

  async ngOnInit()
  {
    this.categories = this.taskService.list;
    this.totalTasksComplete();
  }

  chooseCategory(index:number){
    this.categoryIndex = index;
    this.getTasks(index);
  }

  getTasks(index:number){
    this.currentTasks = this.taskService.list[index].tasks;
  } 

  getTask(currentTask:number){
    this.currentTask = this.taskService.list[currentTask].tasks;
  }

  updateCheckbox(task:Task)
  {
    this.taskService.writeToStorage();  
    
    //this.list[categoryIndex].tasks.push(updateItem);
    //rewrite the list
    //this.writeToStorage();
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

