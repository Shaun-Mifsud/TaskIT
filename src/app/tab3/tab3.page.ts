import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { TaskService } from '../services/task.service';
import {  Category, Task } from '../struct/list';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('slides') slides: IonSlides;

      slideOpts = {
        allowTouchMove: false,
        slidesPerView: 1,
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

  selectedIndex: number = -1;
  slideNumber: number = 0;


  constructor(
    private storageService: StorageService,
    public taskService: TaskService
  ) { }

  async ngOnInit()
  {
    this.categories = this.taskService.list;
  }

  addTask(): void
  {
    // this.item.tasks.push({ name: '', complete: false });
  }

  chooseCategory(index: number)
  {
    this.selectedIndex = index;
    console.log(this.selectedIndex);
    
  }

  changeSlide(e)
  {
    const value = e.detail.value;
    this.slides.slideTo(value);
    
  }

  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }

  async save()
  {
    // get all the user tasks from storage.
    // const list: Category[] = await this.storageService.get('list') || [];

    // add the new task to the list we just obtained.
    // list.push(this.item);


    // rewrite the list
    // this.storageService.set('list', list);
  }

}
