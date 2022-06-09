import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public modalIsOpen$ = new BehaviorSubject(false);

  constructor() {}

  handleDismiss(ev: Event) {
    this.modalIsOpen$.next(false);

    const {
      detail: { data },
    } = ev as CustomEvent<OverlayEventDetail>;

    console.log(data);
  }
}
