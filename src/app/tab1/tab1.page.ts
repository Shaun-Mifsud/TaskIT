import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import {  Category, Task } from '../struct/list';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

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
  
  public list: Category = {
    name: '',
    tasks: []
  };

  
  constructor() {}
  //to be changed
  name: string= this.list.name;
  
}

