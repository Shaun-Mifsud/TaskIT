import { Injectable } from '@angular/core';
import { CATEGORY } from '../struct/categories-data';
import { Category } from '../struct/list';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public list: Category[] = [];


  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.list = await this.storageService.get('list') || CATEGORY;
  }

  //func add
  

  //func delete
}
