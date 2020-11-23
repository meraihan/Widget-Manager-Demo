import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
currentUser: User = new User();
  constructor(private  route: ActivatedRoute, private  userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      param => this.getUser(param.id)
    );
  }
  getUser(id): void {
    this.userService.getUser(id).subscribe(
      data => {
        this.currentUser = data;
      },
      err => {
        this.currentUser = JSON.parse(err.error).message;
      }
    );
  }

}
