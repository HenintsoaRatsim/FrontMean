import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  OnLogOut(){
    console.log('logout faite');
    this.authService.logOutUser();
    this.router.navigate(['']);
  }

}
