import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {User} from '../users';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  content: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private  routher: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      param => this.getUser(param.id)
    );
  }
  getUser(id): void {
    this.userService.getUser(id).subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }


  goToDetail(id: number): void {
    this.routher.navigate(['detail'], { queryParams: { id } });
  }
}
