import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User
  constructor(private UserService: UserService, private router: Router) {
    this.UserService.user = this.UserService.user
    this.user = new User()
  }
  login(form: NgForm) {
    this.UserService.login(this.user).subscribe((data: User[]) => {
      if (data.length) {
        this.UserService.isLogged = true
        this.UserService.user = new User(data[0].id_user, data[0].name, data[0].surname, data[0].email, data[0].photo, data[0].password)
        console.log(this.UserService.user);
        this.router.navigate(['/books'])
      } else {
        console.log('Wrong credentials')
      };
    })
    console.log(form.value);
    console.log(this.user);


  }
}

