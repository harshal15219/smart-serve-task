import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { timeout } from 'rxjs';
import { LoadingService } from '../app/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Smart serv task';
  isLoading = false;

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {  
    this.loadingService.loadingState.subscribe(res => {
      this.isLoading = res.active;
    });
  }

}
