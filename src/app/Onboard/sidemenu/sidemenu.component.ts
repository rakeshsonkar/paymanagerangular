import { Component, OnInit,ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  showFiller = false;
  isMenuOpened = true;
  EmpInfo:any;
  
  
  @ViewChild('select') select!: ElementRef;
  selected :string="active";
  constructor(private http: HttpClient,private router: Router, private apiService: ServiceService,) { }

 toolbarToggle(){
  console.log('toggle tool bar is opened',this.isMenuOpened )
  this.isMenuOpened = !this.isMenuOpened;
 }

  ngOnInit(): void {
    this.apiService.getEmployeeInfo().subscribe(res => {
        this.EmpInfo = res;
    }) 
    
  }
  

  // togglesidebar() {
  //   if(this.selected==="active"){
  //     var x = document.getElementsByClassName('sidebar'); 
      
  //   document.getElementById('sidebar')?.classList.add('toggler');
  //   document.getElementById('sidebarbtn')?.classList.add('toggle-sidebar-btn_toggle');
  //   this.selected="inactive";
  //   }
  //   else{
  //   document.getElementById('sidebar')?.classList.remove('toggler');
  //   document.getElementById('sidebarbtn')?.classList.remove('toggle-sidebar-btn_toggle');
  //   this.selected="active";
  //   }
   
  // }
}
