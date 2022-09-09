import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/follower-feed'])
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
