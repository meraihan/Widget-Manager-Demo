import { Component, OnInit } from '@angular/core';
import { PersonalWidget } from '../personal';
import { PersonalWidgetService } from '../../app/_services/personal-widget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-widget-create',
  templateUrl: './personal-widget-create.component.html',
  styleUrls: ['./personal-widget-create.component.css']
})
export class PersonalWidgetCreateComponent implements OnInit {

  personalWidget: PersonalWidget = new PersonalWidget();
  constructor(private personalWidgetService: PersonalWidgetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePersonalWidget(){
    this.personalWidgetService.createPersonalWidget(this.personalWidget).subscribe( data =>{
      console.log(data);
      this.goToPersonalWidgetList();
    },
    error => console.log(error));
  }

  goToPersonalWidgetList(){
    this.router.navigate(['/personal-widget-list']);
  }

  createPersonalWidget(){
    this.router.navigate(['create-personal-widget']);
  }
  
  onSubmit(){
    console.log(this.personalWidget);
    this.savePersonalWidget();
  }

}
