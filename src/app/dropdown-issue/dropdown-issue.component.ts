import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { Modal, ModalConfig, ModalController } from '@kirbydesign/designsystem';
import { times } from 'lodash';



@Component({
  selector: 'app-dropdown-issue',
  templateUrl: './dropdown-issue.component.html',
  styleUrls: ['./dropdown-issue.component.scss']
})
export class DropdownIssueComponent{
  items = times(14, i => i + '')

  constructor(@Optional() @SkipSelf() private modal: Modal) {

  }

  closeModal() {
    this.modal?.close();
  }
}
