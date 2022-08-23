import { Component } from '@angular/core';
import { ModalConfig, ModalController } from '@kirbydesign/designsystem';
import { DropdownIssueComponent } from './dropdown-issue/dropdown-issue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kirby-playground';
  constructor(
    private modalController: ModalController
  ){}
  openModal() {
    const config: ModalConfig = {
      flavor: 'modal',
      component: DropdownIssueComponent,
    };
    //this.modalController.navigateToModal()
    this.modalController.showModal(config);
  }
}
