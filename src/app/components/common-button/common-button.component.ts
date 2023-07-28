import { Component, Input } from '@angular/core';
import { Func } from 'mocha';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.css']
})
export class CommonButtonComponent {

  @Input() onclick: Function | undefined;
  // @Input() buttonName: string = "";

  public onclickWrapper() {
    if (this.onclick) {
      this.onclick()
    }
  }
}
