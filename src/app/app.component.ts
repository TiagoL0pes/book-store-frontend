import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { TemplateService } from './shared/services/template.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store';
  state$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private service: TemplateService
  ) { }

  ngOnInit(): void {
    this.state$ = this.service.state$;
  }
}
