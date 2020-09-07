import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, switchMap } from 'rxjs/operators';
import { Post } from '../models/post';
import { mockPosts } from './mock-posts';

@Injectable({
  providedIn: 'root',
})
export class EngageHttpService {
  constructor(private toastController: ToastController) {}

  getPosts(pageIndex: number, limit: number): Observable<Post[]> {
    return of(this.getChunk(limit)[pageIndex]).pipe(
      delay(500),
      catchError((error) => {
        this.handleErrorToast(error);
        return of([]);
      })
    );
  }

  getPostById(postId: number): Observable<Post> {
    const foundPost = mockPosts.find((post) => {
      return post.id === postId;
    });
    return of(foundPost).pipe(
      delay(500),
      catchError((error) => {
        this.handleErrorToast(error);
        return of(null);
      })
    );
  }

  setLike(contentId: number) {
    return of(contentId).pipe(
      delay(500),
      switchMap(() => {
        if (Math.random() < 0.25) {
          return throwError('There was an error');
        } else {
          return of(contentId);
        }
      }),
      catchError((error) => {
        this.handleErrorToast(error);
        return throwError(error);
      })
    );
  }

  setUnlike(contentId: number) {
    return of(contentId).pipe(
      delay(500),
      switchMap(() => {
        if (Math.random() < 0.25) {
          return throwError('There was an error');
        } else {
          return of(contentId);
        }
      }),
      catchError((error) => {
        this.handleErrorToast(error);
        return throwError(error);
      })
    );
  }

  private getChunk(chunkSize: number) {
    return [].concat.apply(
      [],
      mockPosts.map((_, i: number) => {
        return i % chunkSize ? [] : [mockPosts.slice(i, i + chunkSize)];
      })
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
