import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToUpcomingTrips() : void {}
  navigateToFindFriends() : void {}
  navigateToPackageTrips() : void {}
  navigateHome(): void{
    this.router.navigate(['/home']);
  }
}
