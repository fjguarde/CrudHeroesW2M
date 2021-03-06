import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Hero } from '../../../app/models/interfaces'
import { TranslateService } from '@ngx-translate/core'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'

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
  private regIsValidName = '^[A-Za-z]+[ \t\n\r\f\v]*[A-Za-z]+$';
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private durationInSeconds = 3;


  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService,
    private snackBar: MatSnackBar) { }

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

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    })
  }

  public onSubmitForm(hero: Hero): void {
    this.heroesService
      .updateHero(hero)
        .subscribe(() => {
          this.openSnackBar(this.translate.instant('UPDATE_SUCCESS'), this.translate.instant('OK'))
          this.router.navigate(['heroes'])
          
        })
  }

  private buildForm(): void {
    this.formHero = this.fb.group({
      id: [this.hero ? this.hero.id : ''],
      name: [this.hero ? this.hero.name : '', [Validators.required, Validators.pattern(this.regIsValidName)]],
      publisher: [this.hero ? this.hero.publisher : ''],
      alterEgo: [this.hero ? this.hero.alterEgo : ''],
      firstAppearance: [this.hero ? this.hero.firstAppearance : ''],
      characters: [this.hero ? this.hero.characters : ''],
    })
  }
}
