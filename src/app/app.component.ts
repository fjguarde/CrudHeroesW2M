import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'
import { LoadingService } from './services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'CrudHeroesW2M';
  public loading: boolean = true;
  public loadingSubscription: Observable<boolean>

  constructor(
    private loadingService: LoadingService,
    private translate: TranslateService) {
      translate.setDefaultLang('en')
  }

  ngOnInit() {
    this.loadingSubscription = this.loadingService.loadingStatus
  }

}
