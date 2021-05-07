import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { ListCreationService } from '../services/list-creation.service';
import { StorageService } from '../services/storage.service';
import {  List } from '../struct/list';

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

  public name:string=null;


  constructor(
    private storageService: StorageService,
    public ListCreationService: ListCreationService
  ) { }

  async ngOnInit()
  {
    //TO BE CHANGED
    this.name = await this.storageService.get('listName');
  }

  onChange(key: string, e: any): void
  {
    this.storageService.set(key, e.detail.value);
  }


}
