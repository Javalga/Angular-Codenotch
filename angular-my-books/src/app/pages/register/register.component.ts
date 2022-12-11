import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user: User;
  public pwdMatch: boolean
  constructor(private UserService: UserService) {
    this.user = new User()
  }
  register(form: NgForm, repeatPassword: string) {
    if (this.user.password != repeatPassword) {
      console.log('Passwords must match');
      this.pwdMatch = false
      return
    }
    if (form.status === "INVALID") return
    this.pwdMatch = true
    this.UserService.register(this.user).subscribe((data: User) => {
      console.log(data)
      console.log(form);
      console.log(this.user);
    })
  }
}
