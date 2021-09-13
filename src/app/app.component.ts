import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs/internal/Subscription'
import { LoadingService } from './services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'CrudHeroesW2M';
  public loading: boolean = true;
  private loadingSubscription: Subscription = new Subscription;

  constructor(
    private loadingService: LoadingService,
    private translate: TranslateService) {
      translate.setDefaultLang('en')
  }

  ngOnInit() {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value: any) => {
      this.loading = value
    })
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe()
  }
}
