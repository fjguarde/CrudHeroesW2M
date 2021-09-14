import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Hero } from '../../../app/models/interfaces'

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
  private regexIsALetter = '^[a-zA-Z]+$';

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm()
    this.heroId = this.route.snapshot.paramMap.get('id')!
    this.heroesService
    .getHeroeById(this.heroId)
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
        })
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
}
