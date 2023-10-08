import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { allCurrenciesChipOptions } from 'src/app/constants/all-currencies-chip-options';
import { bitcoinServicesGridTiles } from 'src/app/constants/bitcoin-services-grid-tiles';
import { ChipIconListComponent } from 'src/app/shared/chip-icon-list/chip-icon-list.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { ParticleBgComponent } from '../../shared/particle-bg/particle-bg.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatChipsModule, NgFor, GridComponent, ChipIconListComponent, ParticleBgComponent],
})
export default class HomeComponent {
  public readonly bitcoinServicesGridTiles = bitcoinServicesGridTiles;
  public readonly allCurrenciesChipOptions = allCurrenciesChipOptions;
}
