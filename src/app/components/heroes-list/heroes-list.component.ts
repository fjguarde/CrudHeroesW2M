import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/interfaces';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{

  public heroesData: Hero[] = [];
  public dataSource: any;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
    private router: Router){};

  ngOnInit(): void {
   this.heroesService.getHeroes('http://localhost:9080/heroes')
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

}



