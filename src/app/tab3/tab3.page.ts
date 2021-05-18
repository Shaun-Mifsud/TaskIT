import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import {  Category, Task } from '../struct/list';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

      slideOpts = {
      slidesPerView: 1,
      coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

  public item: Category = {
    name: '',
    tasks: []
  };

  selectedIndex: number = -1;



  constructor(
    private storageService: StorageService,
    public ListCreationService: ListCreationService
  ) { }

  async ngOnInit()
  {

  }

  addTask(): void
  {
    this.item.tasks.push({ name: '', complete: false });
  }

  chooseCategory(index: number)
  {
    this.selectedIndex = index;
  }

  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }

  async save()
  {
    // get all the user tasks from storage.
    const list: Category[] = await this.storageService.get('list') || [];

    // add the new task to the list we just obtained.
    list.push(this.item);


    // rewrite the list
    this.storageService.set('list', list);
  }

}
