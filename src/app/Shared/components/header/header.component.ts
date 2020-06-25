import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() togglesiderbarevent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  toggleSidebar(){
    this.togglesiderbarevent.emit();

  }

}
