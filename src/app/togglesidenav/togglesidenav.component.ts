import { Component, OnInit,ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-togglesidenav',
  templateUrl: './togglesidenav.component.html',
  styleUrls: ['./togglesidenav.component.css']
})
export class TogglesidenavComponent implements OnInit {
  isMenuopen = true;
  contentMargin = 240;
  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    console.log("menu is toggle", this.isMenuopen)
    this.isMenuopen = !this.isMenuopen;
  }
  @ViewChild('select') select!: ElementRef;
}
