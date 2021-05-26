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

  changeSlide(slideNumber)
  {
    if(slideNumber ==0){
      this.ionSlides.slideTo(0);  
      this.slideNumber = 0;
    }

    if(slideNumber ==1){
      this.ionSlides.slideTo(1);  
      this.slideNumber = 1;
    }

    if(slideNumber ==2){
      this.ionSlides.slideTo(2);  
      this.slideNumber = 2;
    }
  }  

  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }

  async save()
  {
    this.taskService.save(this.selectedIndex,this.item,this.item.endTime,this.item.reminder,this.item.endDate);
    this.item = { name: '', complete: false }; // blank out the item if not redirecting to another page
    
    this.ionSlides.slideTo(0);  
    this.slideNumber = 0;
  }

}
