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
     (response: any) => {
      this.heroesData = response;
      this.dataSource = new MatTableDataSource<Hero>(this.heroesData);
      this.dataSource.paginator = this.paginator;
     });
  }

  displayedColumns: string[] = ['name', 'publisher', 'alter_ego', 'first_appearance', 'characters', 'actions'];
  
  @ViewChild('paginator')
  paginator!: MatPaginator;   

  public newEditHeroe(subPath: string){
    this.router.navigate([`form-heroes/${subPath}`]);
  }
  
  public deleteItem(row: any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}



