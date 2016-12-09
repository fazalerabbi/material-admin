import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-widget',
  template: `<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class="info-box {{bgColor}} hover-expand-effect">
      <div class="icon">
        <i class="material-icons">{{icon}}</i>
      </div>
      <div class="content">
        <div class="text"> {{text}} </div>
        <div class="number count-to" data-from="0" data-to="{{ count }}" data-speed="15" data-fresh-interval="20"></div>
      </div>
    </div>
  </div>`,
  styleUrls: []
})
export class WidgetComponent {
  @Input() bgColor: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() count: string = '';

  constructor() { }

}
