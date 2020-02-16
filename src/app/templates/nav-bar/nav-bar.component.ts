import { Component, OnInit } from '@angular/core';
import { Route } from '../../shared/enums/route.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(route: string) {
    this.router.navigateByUrl(Route[route]);
  }

}
