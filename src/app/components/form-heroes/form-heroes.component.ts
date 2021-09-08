import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/interfaces';

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

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.buildForm();
    this.heroId = this.route.snapshot.paramMap.get('id')!;
    this.heroesService.getHeroeById('http://localhost:9080/heroes', this.heroId)
    .subscribe( (resp: Hero) => this.hero = resp)

  }
  buildForm() {
    this.formHero = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regexIsALetter)]],
      publisher: [''],
      alter_ego: [''],
      first_appearance: [''],
      characters: [''],
    })
  }


}
