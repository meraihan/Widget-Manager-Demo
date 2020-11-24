import { Component, OnInit } from '@angular/core';
import { PersonalWidget } from '../personal';
import { PersonalWidgetService } from '../../app/_services/personal-widget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-widget-list',
  templateUrl: './personal-widget-list.component.html',
  styleUrls: ['./personal-widget-list.component.css']
})
export class PersonalWidgetListComponent implements OnInit {

  personalWidget: PersonalWidget[];

  constructor(private personalWidgetService: PersonalWidgetService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersonalWidget();
    this.reloadData();
  }

  getPersonalWidget(){
    this.personalWidgetService.getPersonalWidgetList().subscribe(data => {
      this.personalWidget = data;
    });
  }

  personalWidgetDetails(id: number){
    this.router.navigate(['personal-widget-details', id]);
  }

  updatePersonalWidget(id: number){
    this.router.navigate(['update-personal-widget', id]);
  }

  createPersonalWidget(){
    this.router.navigate(['create-personal-widget']);
  }

  deletePersonalWidget(id: number){
    this.personalWidgetService.deletePersonalWidget(id).subscribe( data => {
      console.log(data);
      this.getPersonalWidget;
      this.reloadData();
    })
  }

  reloadData() {
    this.personalWidgetService.getPersonalWidgetList();
  }

}
