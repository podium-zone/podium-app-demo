import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Post } from '../../engage/models/post';
import { mockPosts } from '../../engage/services/mock-posts';

@Injectable({
  providedIn: 'root',
})
export class TribeHttpService {
  constructor(private toastController: ToastController) {}

  getPosts(pageIndex: number, limit: number): Observable<Post[]> {
    return of(this.getChunk(limit)[pageIndex]).pipe(
      delay(500),
      catchError((error) => this.handleErrorToast(error)),
    );
  }

  private getChunk(chunkSize: number) {
    return [].concat.apply(
      [],
      mockPosts.map((_, i: number) => {
        return i % chunkSize ? [] : [mockPosts.slice(i, i + chunkSize)];
      }),
    );
  }

  private async handleErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
