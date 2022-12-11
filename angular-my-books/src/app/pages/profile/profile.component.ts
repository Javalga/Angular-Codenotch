import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public currentUser: User;
  constructor() {
    this.currentUser = new User(1, 'Carlos', 'Rivas Briceño', 'random@email.com', 'http://localhost:4200/assets/img/profile.jpg', '12345')
  }
  update(data: { name: string, surname: string, email: string, photo: string }) {
    this.currentUser.name = data.name || this.currentUser.name;
    this.currentUser.surname = data.surname || this.currentUser.surname;
    this.currentUser.email = data.email || this.currentUser.email;
    this.currentUser.photo = data.photo || this.currentUser.photo;
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'User updated!',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
    })
  }
}
