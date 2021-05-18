import { Injectable } from '@angular/core';
import { Category } from '../struct/list';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListCreationService {

  public list: Category[]=[];


  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.list = await this.storageService.get('list') || [];
  }

  //func add
  

  //func delete
}
