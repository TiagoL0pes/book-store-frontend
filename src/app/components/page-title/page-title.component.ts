import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() icon: string; 
  @Input() main: string;
  @Input() sub: string;
  
  constructor() { }

  ngOnInit() {
  }

}
