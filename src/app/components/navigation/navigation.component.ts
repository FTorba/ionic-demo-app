import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationConfig } from 'src/app/interfaces/NavigationConfig';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  @Input() config: NavigationConfig;

  constructor(
    public apiStorage: ApiAndStorageService
  ) { }

  ngOnInit(): void {}

  searchValueChanged(ev: Event): void {
    const value = typeof ev['detail'] !== 'undefined' ? (typeof ev['detail']['value'] !== 'undefined' ? ev['detail']['value'] : '') : '';
    this.apiStorage.search$.next(value);
    this.apiStorage.set('searchValue', value);
  }
}
