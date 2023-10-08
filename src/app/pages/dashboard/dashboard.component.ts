import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserEntity } from 'projects/central-hash-api-client/src/public-api';

@Component({
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  private readonly _userEntity = inject(UserEntity);

  public readonly user$ = this._userEntity.find();
}
