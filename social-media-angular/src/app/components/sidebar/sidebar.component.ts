import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private localStore: LocalService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/follower-feed'])
  }

  toProfile() {
    this.router.navigate(['/profile'])
  }

  toHome() {
    this.router.navigate(['/post-feed'])
  }

  logout() {
    this.localStore.clearData();
    this.router.navigate(['/login'])
  }

  // $(document).ready(function () {
  //   function toggleSidebar() {
  //     $(".button").toggleClass("active");
  //     $("main").toggleClass("move-to-left");
  //     $(".sidebar-item").toggleClass("active");
  //   }
  
  //   $(".button").on("click tap", function () {
  //     toggleSidebar();
  //   });
  
  //   $(document).keyup(function (e) {
  //     if (e.keyCode === 27) {
  //       toggleSidebar();
  //     }
  //   });
  // });
}
