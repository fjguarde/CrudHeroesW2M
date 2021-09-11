import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-form-heroes',
  templateUrl: './form-heroes.component.html',
  styleUrls: ['./form-heroes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormHeroesComponent implements OnInit {

  public hero: any;
  public heroId = '';
  public formHero: FormGroup = new FormGroup({});
  private regexIsALetter = '^[a-zA-Z]+$';
  public loading: boolean = true;
  private loadingSubscription: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private loadingService: LoadingService ) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value: any) => {
      this.loading = value;
    });
    this.buildForm();
    this.heroId = this.route.snapshot.paramMap.get('id')!;
    this.heroesService.getHeroeById(`${environment.apiUrl}/heroes`, this.heroId)
    .subscribe( (resp: Hero[]) => {
      this.hero = resp[0];
      this.buildForm()
    })

  }
  buildForm() {
    this.formHero = this.fb.group({
      name: [this.hero? this.hero.name : '', [Validators.required, Validators.pattern(this.regexIsALetter)]],
      publisher: [this.hero? this.hero.publisher : ''],
      alter_ego: [this.hero? this.hero.alter_ego : ''],
      first_appearance: [this.hero? this.hero.first_appearance : ''],
      characters: [this.hero? this.hero.characters : ''],
    })
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
