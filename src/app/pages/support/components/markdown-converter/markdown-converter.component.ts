import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-converter',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './markdown-converter.component.html',
  styleUrls: ['./markdown-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MarkdownConverterComponent {
  @Input({ required: true })
  public src!: string;
}
