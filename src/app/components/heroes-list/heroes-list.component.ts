import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{

  public heroes_data: any[] = [];
  public dataSource: any;
  public listLength: number = 0;

  constructor(private heroesService: HeroesService){};

  ngOnInit(): void {
   this.heroesService.getHeroes('http://localhost:9080/heroes')
   .subscribe(
     (data: any) => {
      this.heroes_data = data.heroes;
      this.listLength = data.heroes.length;
      this.dataSource = new MatTableDataSource<Heroes>(this.heroes_data);
      this.dataSource.paginator = this.paginator;
     });
  }

  displayedColumns: string[] = ['name', 'publisher', 'alter_ego', 'first_appearance', 'characters', 'actions'];
  
  @ViewChild('paginator')
  paginator!: MatPaginator;   

  public createHeroe(){
    console.log('----------> ', this.dataSource);
    
  }

}

export interface Heroes {
  name: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}


