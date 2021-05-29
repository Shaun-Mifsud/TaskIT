import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import { TaskService } from '../services/task.service';
import {  Category, Task } from '../struct/list';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  //default segment showing
  selectTabs: string="Daily";

  slideOpts = {
    slidesPerView: 3,
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

  chooseCategory(index:number){
    this.categoryIndex = index;
    //console.log(this.categories[this.categoryIndex]);
  }

  getTasks(index:number){
    this.currentTasks = this.taskService.list[index].tasks;  
    console.log(this.currentTasks);  
  } 

  updateCheckbox(task:Task)
  {
    this.taskService.writeToStorage();
  }

  //calendar
  onChange($event) {
    console.log("test");
    console.log($event);
  }
  
}