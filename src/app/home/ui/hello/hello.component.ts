import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  constructor(public modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss({
      someValue: 'hello',
    });
  }
}
