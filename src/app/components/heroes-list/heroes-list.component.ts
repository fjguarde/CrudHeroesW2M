import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit{

  public heroesData: any[] = [];
  public dataSource: any;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog){};

  ngOnInit(): void {
   this.heroesService.getHeroes('http://localhost:9080/heroes')
   .subscribe(
     (response: any) => {
      this.heroesData = response.heroes;
      this.dataSource = new MatTableDataSource<Heroes>(this.heroesData);
      this.dataSource.paginator = this.paginator;
     });
  }

  displayedColumns: string[] = ['name', 'publisher', 'alter_ego', 'first_appearance', 'characters', 'actions'];
  
  @ViewChild('paginator')
  paginator!: MatPaginator;   

  public createHeroe(){
    console.log('----------> ', this.dataSource);
    
  }
  
  public editItem(row: any){
    console.log('-----edit-----> ', row);

  }
  public deleteItem(row: any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}

export interface Heroes {
  name: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}


