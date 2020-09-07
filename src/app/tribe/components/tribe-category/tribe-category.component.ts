import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TribeCategory, TribeCategoryIconMap } from '../../models/tribe';

@Component({
  selector: 'tribe-category',
  templateUrl: './tribe-category.component.html',
  styleUrls: ['./tribe-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TribeCategoryComponent {
  @Input() height: number;
  @Input() category: TribeCategory;
  @Input() orientation: '' | 'VERT' = '';
  @Input() alt: string;

  readonly tribeCategoryIconMap = TribeCategoryIconMap;
}
