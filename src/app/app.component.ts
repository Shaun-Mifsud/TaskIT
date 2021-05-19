import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit()
  {
    this.taskService.init();
  }
}
