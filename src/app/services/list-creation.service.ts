import { Injectable } from '@angular/core';
import { List } from '../struct/list';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListCreationService {

  public list :List[]=[];


  constructor(
    private storageService: StorageService
  ) { }
}
