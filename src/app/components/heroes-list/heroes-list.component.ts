import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{

  public heroesData: Hero[] = [];
  public dataSource: any;
  public loading: boolean = true;
  private loadingSubscription: Subscription = new Subscription;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
    private router: Router,
    private loadingService: LoadingService ){};

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value: any) => {
      this.loading = value;
    });
   this.heroesService.getHeroes(`${environment.apiUrl}/heroes`)
   .subscribe(
     (response: Hero[]) => {
      this.heroesData = response;
      this.loadTable(response);
     });
  }
  loadTable(heroParam: Hero[]) {
    this.dataSource = new MatTableDataSource<Hero>(heroParam);
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['name', 'publisher', 'alter_ego', 'first_appearance', 'characters', 'actions'];
  
  @ViewChild('paginator')
  paginator!: MatPaginator;   

  public newEditHeroe(subPath: string){
    this.router.navigate([`form-heroes/${subPath}`]);
  }
  
  public deleteHero(id: string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.heroesService
          .deleteHero(`${environment.apiUrl}/heroes`, id)
            .subscribe((idResponse: string) => {
              this.removeTableRow(id);
              this.loadTable(this.heroesData);
            }
            );
      }
    });

  }
  removeTableRow(id: string) {
    const heroToFind: Hero = this.heroesData.find(e => e.id === id)!;
    const index = this.heroesData.indexOf(heroToFind, 0);
    
    if (index > -1) {
      this.heroesData.splice(index, 1);
      this.loadTable(this.heroesData);
    }
  }

  findHero(hero: Hero, id: string) { 
    return hero.id === id;
}

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}



