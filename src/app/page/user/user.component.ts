import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // data: User[];

  data: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    // this.userService.loadUser().subscribe( resp => this.data = resp );
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.data = this.userService.loadUser();
  }

  onDeleteClick(id: string) {
    this.userService.deleteUser(id).subscribe(
      resp => this.loadData(),
      error => console.log(error)
    );
  }

  onAddClick() {
    this.router.navigate(['user-form']);
  }

}
