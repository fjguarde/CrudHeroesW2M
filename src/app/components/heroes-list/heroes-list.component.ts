import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { HeroesService } from '../../services/heroes.service'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'
import { Router } from '@angular/router'
import { Hero } from '../../../app/models/interfaces'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private durationInSeconds = 3;
  public heroesData: Hero[] = [];
  public dataSource: MatTableDataSource<Hero>;
  public displayedColumns: string[] = ['name', 'publisher', 'alterEgo', 'firstAppearance', 'characters', 'actions'];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(
        (response: Hero[]) => {
          this.heroesData = response
          this.loadTable(this.heroesData)
        })
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    })
  }

  public newEditHeroe(subPath: string): void {
    this.router.navigate([`form-heroes/${subPath}`])
  }

  public deleteHero(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent)
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.heroesService
          .deleteHero(id)
            .subscribe(() => {
              this.removeTableRow(id)
              this.loadTable(this.heroesData)
              this.openSnackBar(this.translate.instant('DELETE_SUCCESS'), this.translate.instant('OK'))
            })
      }
    })
  }

  public filterHero(wordToSeach: string): void {
    let filterHeroes: Hero[]
    this.heroesService
      .filterHero(wordToSeach)
        .subscribe((respFilter: Hero[]) => {
          filterHeroes = respFilter
          if (wordToSeach === '') {
            this.loadTable(this.heroesData)
          } else {
            this.loadTable(filterHeroes)
          }
        })
  }

  private loadTable(heroParam: Hero[]): void {
    this.dataSource = new MatTableDataSource<Hero>(heroParam)
    this.dataSource.paginator = this.paginator
  }

  private removeTableRow(id: string): void {
    const heroToFind: Hero = this.heroesData.find(e => e.id === id)!
    const index = this.heroesData.indexOf(heroToFind, 0)

    if (index > -1) {
      this.heroesData.splice(index, 1)
      this.loadTable(this.heroesData)
    }
  }
}



