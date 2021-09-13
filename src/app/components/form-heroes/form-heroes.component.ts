import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Hero } from 'src/app/models/interfaces'
import { Subscription } from 'rxjs/internal/Subscription'
import { LoadingService } from 'src/app/services/loading.service'

@Component({
  selector: 'app-form-heroes',
  templateUrl: './form-heroes.component.html',
  styleUrls: ['./form-heroes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormHeroesComponent implements OnInit {

  public hero: Hero;
  public heroId = '';
  public formHero: FormGroup;
  public loading: boolean = true;
  private regexIsALetter = '^[a-zA-Z]+$';
  private loadingSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private loadingService: LoadingService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value: any) => {
      this.loading = value
    })
    this.buildForm()
    this.heroId = this.route.snapshot.paramMap.get('id')!
    this.heroesService.getHeroeById(this.heroId)
      .subscribe((resp: Hero[]) => {
        this.hero = resp[0]
        this.buildForm()
      })
  } 

  public onSubmitForm(hero: Hero): void {
    this.heroesService
      .updateHero(hero)
      .subscribe(() => {
        this.router.navigate(['heroes'])
      }
      )
  }

  private buildForm(): void {
    this.formHero = this.fb.group({
      id: [this.hero ? this.hero.id : ''],
      name: [this.hero ? this.hero.name : '', [Validators.required, Validators.pattern(this.regexIsALetter)]],
      publisher: [this.hero ? this.hero.publisher : ''],
      alterEgo: [this.hero ? this.hero.alterEgo : ''],
      firstAppearance: [this.hero ? this.hero.firstAppearance : ''],
      characters: [this.hero ? this.hero.characters : ''],
    })
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe()
  }

}
