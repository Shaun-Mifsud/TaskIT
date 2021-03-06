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

  @ViewChild('slides') ionSlides: IonSlides;

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

  //cateogry ID
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

  chooseCategory(index: number)
  {
    this.selectedIndex = index;
    this.slideNumber = 1;

    this.ionSlides.slideTo(1);
    console.log(this.selectedIndex);
  }

  changeSlide()
  {
    this.ionSlides.slideTo(0);  
    this.slideNumber = 0;
  }  

  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }

  async save()
  {
    this.item.endDate = new Date(this.item.endDate).setHours(0, 0, 0, 0);
    const date = new Date(this.item.endTime).setHours(0, 0, 0, 0);
    this.item.endTime = new Date(this.item.endTime).setSeconds(0, 0) - date;

    this.taskService.save(this.selectedIndex,this.item,this.item.endTime,this.item.reminder,this.item.endDate);
    this.item = { name: '', complete: false }; // blank out the item if not redirecting to another page
    
    this.ionSlides.slideTo(0);  
    this.slideNumber = 0;
  }

}
