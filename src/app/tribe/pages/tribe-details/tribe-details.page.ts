import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EngageHttpService } from '../../../engage/services/engage-http.service';

@Component({
  selector: 'app-tribe-details',
  templateUrl: './tribe-details.page.html',
  styleUrls: ['./tribe-details.page.scss'],
})
export class TribeDetailsPage {
  constructor(private httpService: EngageHttpService, private menu: MenuController) {}

  private readonly editMode = new BehaviorSubject<boolean>(false);
  readonly editMode$ = this.editMode.asObservable();

  readonly backgroundUrl = `./assets/podium-bgs/bg-${Math.floor(Math.random() * 10 + 1)}.jpg`;

  readonly chatContent$ = this.httpService.getPostById(1354632462346).pipe(map((post) => post.comments));
  readonly members$ = this.httpService
    .getPostById(1354632462346)
    .pipe(map((post) => post.comments.map((comment) => comment.replies.map((reply) => reply.author))[0]));

  toggleEditMode() {
    this.editMode.next(!this.editMode.value);
  }

  openMenu() {
    this.menu.enable(true, 'tribe-details-menu');
    this.menu.open('tribe-details-menu');
  }

  closeMenu() {
    this.menu.close('tribe-details-menu');
  }
}
