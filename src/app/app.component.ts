import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'
import { LoadingService } from './services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{

  public title = 'CrudHeroesW2M';
  public loadingSubscription: Observable<boolean>

  constructor(
    private loadingService: LoadingService,
    private translate: TranslateService,
    private changeDetector: ChangeDetectorRef) {
      translate.setDefaultLang('en')
  }
  ngAfterViewChecked(): void {
    this.loadingSubscription = this.loadingService.loadingStatus
    this.changeDetector.detectChanges()
  }

}
