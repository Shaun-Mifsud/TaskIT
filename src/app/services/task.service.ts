import { Injectable } from '@angular/core';
import { CATEGORY } from '../struct/categories-data';
import { Category, Task } from '../struct/list';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public list: Category[] = [];  

  public CheckCheckmark:boolean= false;


  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.list = await this.storageService.get('list') || CATEGORY;
  }

  //index: category
  //task : current task input
  async save(index: number, task: Task, endTime:number, reminder:number,endDate:number)
  {
    //add the new task to the list we just obtained.
    this.list[index].tasks.push(task);
    //rewrite the list
    this.writeToStorage();
  }

  delete(categoryIndex,currentIndex:number)
  {
    this.list[categoryIndex].tasks.splice(currentIndex,1);
    //rewrite the list
    this.writeToStorage();
  }

  // TO BE CHANGED
  edit(categoryIndex,currentIndex:number)
  {
    this.list[categoryIndex].tasks.splice(currentIndex,1);
    //rewrite the list
    this.writeToStorage();
  }

  getAllTasks(date?: number)
  {
    const list = this.list.map(l => l.tasks).reduce((accumulator, currentValue) => accumulator.concat(currentValue));
    if (date != undefined) return list.filter(t => t.endDate == date);
    return list;
  }

  getTaskByDate(categoryIndex: number, date: number)
  {
    return this.list[categoryIndex].tasks.filter(t => t.endDate == date);
  }


  public writeToStorage()
  {
    this.storageService.set('list', this.list);
  }
}

