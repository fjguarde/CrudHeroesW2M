import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading: boolean = true;
  public loadingStatus = new Subject<boolean>();

  get loading():boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  public startLoading():void {
    this.loading = true;
  }

  public stopLoading():void {
    this.loading = false;
  }
}
