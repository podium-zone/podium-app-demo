import { Component, Input } from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  constructor() {}

  @Input() members: string[];
}
