import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { finalize, delay } from 'rxjs/operators'
import { LoadingService } from '../services/loading.service'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private activeRequests: number = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.startLoading()
    }

    this.activeRequests++
    return next.handle(request).pipe(
      delay(2000),
      finalize(() => {
        this.activeRequests--
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading()
        }
      })
    )
  };
}