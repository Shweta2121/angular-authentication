import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard-page-form',
  templateUrl: './dashboard-page-form.component.html',
  styleUrls: ['./dashboard-page-form.component.scss']
})
export class DashboardPageFormComponent implements OnInit {
userData:any;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.userData = JSON.parse(localStorage.getItem("user"));
    console.log(this.userData);
  }

  
  logout(): void {
    console.log('Logged out');
    this.auth.logout();
  }

}
